import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-store";
import { 
  LayoutDashboard, 
  Package, 
  MapPin, 
  UserPen, 
  Star, 
  LogOut,
  User as UserIcon,
  Heart,
  Map
} from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Account — PITCHKIT" },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate({ to: "/" });
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn || !user) return null;

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "orders", label: "Orders", icon: Package },
    { id: "track", label: "Track Order", icon: Map },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "details", label: "Account details", icon: UserPen },
    { id: "points", label: "Points", icon: Star },
  ];

  return (
    <div className="container-x py-12">
      <h1 className="font-display text-4xl mb-10">My account</h1>
      
      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        <aside className="space-y-6">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center border border-border">
              <UserIcon className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <div className="font-semibold">{user.name}</div>
              <div className="text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors" onClick={() => { logout(); navigate({ to: "/" }); }}>
                Account / Log out
              </div>
            </div>
          </div>
          
          <nav className="flex flex-col space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground rounded-md"
                      : "hover:bg-muted rounded-md text-foreground/80 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
            <div className="my-2 border-t border-border"></div>
            <button
              onClick={() => {
                logout();
                navigate({ to: "/" });
              }}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted rounded-md text-foreground/80 hover:text-foreground"
            >
              <LogOut className="h-4 w-4" />
              Log out
            </button>
          </nav>
        </aside>

        <main className="md:border-l md:border-border md:pl-8 min-h-[400px]">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <p className="text-lg">
                Hello <span className="font-semibold">{user.name}</span> (not <span className="font-semibold">{user.name}</span>? <button onClick={() => { logout(); navigate({ to: "/" }); }} className="text-muted-foreground underline hover:text-foreground">Log out</button>)
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From your account dashboard you can view your <button onClick={() => setActiveTab('orders')} className="text-primary underline hover:text-primary/80">recent orders</button>, <button onClick={() => setActiveTab('track')} className="text-primary underline hover:text-primary/80">track an order</button>, manage your <button onClick={() => setActiveTab('addresses')} className="text-primary underline hover:text-primary/80">shipping and billing addresses</button>, and <button onClick={() => setActiveTab('details')} className="text-primary underline hover:text-primary/80">edit your password and account details</button>.
              </p>
            </div>
          )}

          {activeTab !== "dashboard" && (
            <div className="flex items-center justify-center h-full border-2 border-dashed border-border rounded-lg p-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold capitalize">{tabs.find(t => t.id === activeTab)?.label}</h3>
                <p className="text-sm text-muted-foreground mt-2">This section is currently under construction.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
