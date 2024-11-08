import { UserButton } from "@/features/auth/components/user-button";
import React from "react";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { SidebarButton } from "./sidebar-button";
import {
  BellIcon,
  Home,
  MessagesSquareIcon,
  MoreHorizontal,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-4">
      <WorkspaceSwitcher />
      <Separator className="w-5 rounded-[10px] h-[2px]" />
      <SidebarButton
        icon={Home}
        label="Home"
        isActive={pathname.includes("/workspace")}
      />
      <SidebarButton icon={MessagesSquareIcon} label="DMs" />
      <SidebarButton icon={BellIcon} label="Activity" />
      <SidebarButton icon={MoreHorizontal} label="More" />

      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </div>
  );
};
