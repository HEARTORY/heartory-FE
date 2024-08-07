import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { useToast } from "@/components/ui/Toast/use-toast";
interface customJWTPayload extends JwtPayload {
  sub: string;
}
const getJwtUser = (token: string): customJWTPayload => {
  return jwtDecode(token);
};
export const useAuth = () => {
  const { toast } = useToast();
  const [userRoles, setUserRoles] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const token = localStorage.getItem("Token");

  const checkTokenExpiration = useCallback(async () => {
    if (token) {
      const decoded = getJwtUser(token);

      if (!decoded || typeof decoded.exp !== "number") {
        setUserRoles(null);
        setLoading(false); // Set loading to false when authentication check is done
        return;
      }

      if (decoded.exp < Date.now() / 1000) {
        setUserRoles(null);
        localStorage.removeItem("Token");
        navigate("/login");
        toast({
          variant: "destructive",
          title: "Your session is over!",
          description: "Please login again!!!",
        });
        setLoading(false); // Set loading to false when authentication check is done
        return;
      } else {
        setUserRoles(decoded.sub);
        setLoading(false); // Set loading to false when authentication check is done
      }
    } else {
      setUserRoles(null);
      setLoading(false); // Set loading to false when authentication check is done
      return;
    }
  }, [token, navigate]);

  useEffect(() => {
    checkTokenExpiration();
    const intervalId = setInterval(checkTokenExpiration, 60000);
    return () => clearInterval(intervalId);
  }, [checkTokenExpiration]);

  return { userRoles, loading }; // Return loading state along with userRole
};
