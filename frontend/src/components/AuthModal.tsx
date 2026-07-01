import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, Eye, Lock, User, Phone, LogIn, UserPlus, Smartphone, X } from "lucide-react";
import { useAuth } from "@/lib/auth-store";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function AuthModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }
    const res = login(email, password);
    if (res.success) {
      toast.success("Logged in successfully!");
      onOpenChange(false);
      navigate({ to: "/profile" });
    } else {
      toast.error(res.error || "Failed to log in");
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !name) {
      toast.error("Please fill in all required fields");
      return;
    }
    const res = signup({ email, password, name });
    if (res.success) {
      toast.success("Account created successfully!");
      onOpenChange(false);
      navigate({ to: "/profile" });
    } else {
      toast.error(res.error || "Failed to sign up");
    }
  };

  const handleGoogleLogin = () => {
    // This is the placeholder for the real Google Auth API
    toast.info("Google Login requires Firebase/Supabase API keys to function as a real popup.");
    
    // Simulate real Google login flow opening a window
    const popup = window.open("", "Google Login", "width=500,height=600");
    if (popup) {
      popup.document.write("<h2>Google Sign In (Placeholder)</h2><p>Configure Firebase/Supabase to enable real OAuth flow.</p>");
      setTimeout(() => {
        popup.close();
        const res = login("google-user@gmail.com", "", true);
        if (res.success) {
          toast.success("Mock Google Login successful!");
          onOpenChange(false);
          navigate({ to: "/profile" });
        }
      }, 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-none max-w-5xl overflow-hidden bg-transparent shadow-none [&>button]:hidden sm:rounded-[2rem]">
        {/* We add hidden title and description for screen readers */}
        <div className="sr-only">
          <DialogTitle>Authentication</DialogTitle>
          <DialogDescription>Login or sign up for an account.</DialogDescription>
        </div>

        <div className="w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] relative">
          
          {/* LEFT PANEL (Brand Colors) - Hidden on Mobile */}
          <div className="hidden md:flex w-full md:w-1/2 relative overflow-hidden bg-primary text-primary-foreground p-10 flex-col justify-center">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="login-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md mx-auto"
                >
                  <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 tracking-wider">Welcome to PITCHKIT</h1>
                  <p className="text-primary-foreground/90 text-lg mb-8">Your one-stop shop for premium football jerseys.</p>
                  <ul className="space-y-4">
                    {[
                      "Fast & Secure Shopping",
                      "Exclusive Deals & Offers",
                      "24/7 Customer Support",
                      "Easy Returns & Refunds"
                    ].map((item, i) => (
                      <motion.li 
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i + 0.2 }}
                        className="flex items-center gap-3 font-medium text-primary-foreground/90"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="register-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md mx-auto"
                >
                  <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 tracking-wider">Hello, Friend!</h1>
                  <p className="text-primary-foreground/90 text-lg mb-8">Enter your personal details and start your journey with us.</p>
                  <ul className="space-y-4">
                    {[
                      "Fast & Secure Shopping",
                      "Exclusive Deals & Offers",
                      "24/7 Customer Support",
                      "Easy Returns & Refunds"
                    ].map((item, i) => (
                      <motion.li 
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i + 0.2 }}
                        className="flex items-center gap-3 font-medium text-primary-foreground/90"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT PANEL (Forms) */}
          <div className="w-full md:w-1/2 bg-background p-8 lg:p-12 flex flex-col relative overflow-y-auto max-h-[90vh] md:max-h-none">
            
            {/* Custom Close Button */}
            <button 
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full max-w-md mx-auto">
              {/* Header / Logo */}
              <h2 className="text-3xl font-display font-bold text-primary text-center mb-8 tracking-widest">PITCHKIT</h2>

              {/* Toggle Switch */}
              <div className="bg-muted p-1 rounded-full flex mb-8 relative">
                {/* Animated Pill Background */}
                <motion.div
                  className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full shadow-sm"
                  animate={{ left: isLogin ? "4px" : "calc(50%)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2.5 text-sm font-bold z-10 transition-colors ${isLogin ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2.5 text-sm font-bold z-10 transition-colors ${!isLogin ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  Sign Up
                </button>
              </div>

              {/* Social Login Buttons */}
              <div className="flex gap-4 mb-4">
                <button 
                  onClick={handleGoogleLogin}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-border rounded-xl hover:bg-muted transition-colors font-medium text-sm text-foreground"
                >
                  <span className="text-red-500 font-bold text-lg">G</span> Google
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-border rounded-xl hover:bg-muted transition-colors font-medium text-sm text-foreground">
                  <span className="text-blue-600 font-bold text-lg">f</span> Facebook
                </button>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-colors font-medium text-sm mb-6">
                <Smartphone className="w-4 h-4" /> Login with Phone Number
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-border"></div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">OR</span>
                <div className="flex-1 h-px bg-border"></div>
              </div>

              {/* Forms Container */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  {isLogin ? (
                    <motion.form
                      key="login-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                      onSubmit={handleLogin}
                    >
                      <div className="relative">
                        <input 
                          type="email" 
                          placeholder="Email address" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
                        />
                        <Mail className="absolute right-4 top-3.5 w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="relative">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Password" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3.5">
                          <Eye className={`w-4 h-4 transition-colors ${showPassword ? 'text-primary' : 'text-muted-foreground'}`} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-input text-primary focus:ring-primary" />
                          <span className="text-sm text-foreground">Remember me</span>
                        </label>
                        <button type="button" className="text-sm text-primary font-medium hover:underline">Forgot password?</button>
                      </div>

                      <button type="submit" className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors mt-6 flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                        <LogIn className="w-4 h-4" /> Login
                      </button>
                    </motion.form>
                  ) : (
                    <motion.form
                      key="register-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                      onSubmit={handleSignup}
                    >
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Full Name" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
                        />
                        <User className="absolute right-4 top-3.5 w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="relative">
                        <input 
                          type="email" 
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} 
                          className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
                        />
                        <Mail className="absolute right-4 top-3.5 w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="relative">
                        <input 
                          type="tel" 
                          placeholder="Phone Number (Optional)" 
                          className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
                        />
                        <Phone className="absolute right-4 top-3.5 w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="relative">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Password" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3.5">
                          <Eye className={`w-4 h-4 transition-colors ${showPassword ? 'text-primary' : 'text-muted-foreground'}`} />
                        </button>
                      </div>
                      <div className="relative">
                        <input 
                          type="password" 
                          placeholder="Confirm Password" 
                          className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
                        />
                        <Lock className="absolute right-4 top-3.5 w-4 h-4 text-muted-foreground" />
                      </div>

                      <button type="submit" className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors mt-6 flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                        <UserPlus className="w-4 h-4" /> Create Account
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="mt-8 text-center text-sm text-muted-foreground">
                By continuing, you agree to PITCHKIT's <br/>
                <a href="#" className="text-primary hover:underline">Terms of Service</a> & <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </div>

            </div>
          </div>
          
        </div>
      </DialogContent>
    </Dialog>
  );
}
