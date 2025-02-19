'use client';
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shadcn/components/ui/sidebar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/components/ui/select"
import { Statuses } from "@app/assets/statuses"
import { Genders } from "@app/assets/genders"

//routers 
import { useRouter, useSearchParams } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const router = useRouter(); 
  const searchParams = useSearchParams();
  const status = searchParams.get('status')
  const gender = searchParams.get('gender')
  const activeStatus = status ? status : 'Status'
  const activeGender = gender ? gender : 'Gender'



  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Gezer Group</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <Select onValueChange={(value) => router.push(`/${gender ? `?gender=${gender}&status=${value}` : `?status=${value}`}`)} >
                  <SelectTrigger >
                    <SelectValue placeholder={activeStatus} />
                  </SelectTrigger>
                  <SelectContent onChange={(e) => console.log(e)}>
                    {
                      Statuses.map((status, index) => (
                        <SelectItem key={index} value={status.value}>{status.status}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>

              </SidebarMenuItem>
              <SidebarMenuItem>
                <Select onValueChange={(value) => router.push(`/${status ? `?status=${status}&gender=${value}` : `?gender=${value}`}`)}>
                  <SelectTrigger >
                    <SelectValue placeholder={activeGender} />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      Genders.map((status, index) => (
                        <SelectItem key={index} value={status.value} onChange={(e) => console.log(status)}>{status.label}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
