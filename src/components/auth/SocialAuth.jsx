import { Button } from "../UI/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export const SocialAuth = ({ onSuccess }) => (
  <div className="space-y-3 pt-6">
    {/* Divider */}
    <div className="flex items-center gap-3">
      <div className="flex-1 h-px bg-slate-200" />
      <span className="text-[10px] uppercase font-semibold text-slate-400">
        Or continue with
      </span>
      <div className="flex-1 h-px bg-slate-200" />
    </div>

    <div className="flex items-center gap-3">
      {/* Google */}
      <Button
        type="button"
        variant="outline"
        className="w-full py-5 flex items-center justify-center gap-3 text-slate-700 hover:bg-slate-50"
        onClick={() =>
          onSuccess?.({
            method: "social",
            provider: "google",
          })
        }
      >
        <FcGoogle size={18} />
        Google
      </Button>

      {/* Apple */}
      <Button
        type="button"
        variant="outline"
        className="w-full py-5 flex items-center justify-center gap-3 text-slate-700 hover:bg-slate-50"
        onClick={() =>
          onSuccess?.({
            method: "social",
            provider: "apple",
          })
        }
      >
        <FaApple size={18} />
        Apple
      </Button>
    </div>
  </div>
);
