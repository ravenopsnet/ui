import { useState, useEffect } from "react"
import { toast } from "sonner"
import * as React from "react"
import {
  Search,
  Settings,
  Bell,
  Sun,
  Moon,
  ChevronRight,
  Plus,
  Play,
  RotateCcw,
  Sparkles,
  ShoppingBag,
  SlidersHorizontal,
  Home,
  FileText,
  HelpCircle,
  CalendarDays,
  Mail,
  User,
  Heart,
  Eye,
  Trash2,
  Share2,
  Copy,
  Info,
  Check,
  Globe,
  Monitor,
  Command as CommandIcon,
  X,
  Menu,
  ChevronDown,
} from "lucide-react"

// Recharts components for analytics visualization
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"

// UI Component Imports (55 components)
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DirectionProvider } from "@/components/ui/direction"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@/components/ui/empty"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
} from "@/components/ui/field"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarCheckboxItem,
} from "@/components/ui/menubar"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Toaster } from "@/components/ui/sonner"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Toggle } from "@/components/ui/toggle"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

// --- Fake Data for Analytics and Storefront ---
const chartData = [
  { month: "Jan", sales: 186, target: 80 },
  { month: "Feb", sales: 305, target: 200 },
  { month: "Mar", sales: 237, target: 120 },
  { month: "Apr", sales: 73, target: 190 },
  { month: "May", sales: 209, target: 130 },
  { month: "Jun", sales: 214, target: 140 },
]

const chartConfig = {
  sales: {
    label: "Total Sales ($k)",
    color: "oklch(0.205 0 0)", // primary light theme oklch
  },
  target: {
    label: "Target Goals ($k)",
    color: "oklch(0.556 0 0)", // muted/accent oklch
  },
}

const transactions = [
  {
    id: "TX-1002",
    customer: "Liam Vance",
    email: "liam@raven.sh",
    date: "2026-05-22",
    amount: "$350.00",
    status: "Completed",
    avatar: "L",
  },
  {
    id: "TX-1003",
    customer: "Evelyn Reed",
    email: "evelyn@raven.sh",
    date: "2026-05-21",
    amount: "$1,200.00",
    status: "Pending",
    avatar: "E",
  },
  {
    id: "TX-1004",
    customer: "Marcus Dane",
    email: "marcus@raven.sh",
    date: "2026-05-20",
    amount: "$89.90",
    status: "Completed",
    avatar: "M",
  },
  {
    id: "TX-1005",
    customer: "Clara Finch",
    email: "clara@raven.sh",
    date: "2026-05-18",
    amount: "$45.00",
    status: "Failed",
    avatar: "C",
  },
]

const storefrontProducts = [
  {
    id: 1,
    name: "Raven Core Framework License",
    price: 299,
    category: "Software",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Premium Tailored Component Pack",
    price: 99,
    category: "UI Kits",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Devops Cloud Infrastructure Blueprint",
    price: 499,
    category: "Blueprints",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Agency Branding Identity Package",
    price: 799,
    category: "Design",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60",
  },
]

export function App() {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "shop" | "forms" | "sandbox"
  >("dashboard")
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr")

  // Dialog / Command Dialog controls
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [isConfirmAlertOpen, setIsConfirmAlertOpen] = useState(false)

  // Catalog search / filters
  const [searchTerm, setSearchTerm] = useState("")
  const [inStockOnly, setInStockOnly] = useState(false)
  const [priceRange, setPriceRange] = useState<number[]>([100])
  const [selectedSort, setSelectedSort] = useState("popular")

  // Forms states
  const [formEmail, setFormEmail] = useState("")
  const [formNotes, setFormNotes] = useState("")
  const [otpCode, setOtpCode] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("us")
  const [shippingDate, setShippingDate] = useState<Date | undefined>(new Date())
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Sandbox states
  const [sandboxButtonSize, setSandboxButtonSize] = useState<
    "default" | "xs" | "sm" | "lg"
  >("default")
  const [sandboxBadgeState, setSandboxBadgeState] = useState<
    "default" | "secondary" | "outline" | "destructive"
  >("default")
  const [showSandboxLoader, setShowSandboxLoader] = useState(false)

  // Combobox category filter
  const [selectedCategory, setSelectedCategory] = useState("All")
  const comboboxAnchorRef = useComboboxAnchor()

  // Theme Sync effect
  useEffect(() => {
    const root = window.document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  // Keypress event for Cmd/Ctrl+K (Global Search Command)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsCommandOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Helper trigger to toast notification
  const triggerToast = (
    message: string,
    type: "success" | "info" | "warning" | "error" = "success"
  ) => {
    if (type === "success") toast.success(message)
    if (type === "info") toast.info(message)
    if (type === "warning") toast.warning(message)
    if (type === "error") toast.error(message)
  }

  // Handle simulations
  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProductModalOpen(false)
    triggerToast("Success! New product template initialized.", "success")
  }

  const handleOrderSimulate = () => {
    setIsConfirmAlertOpen(false)
    triggerToast("Initiating operations clearing sequence...", "info")
    setTimeout(() => {
      triggerToast("System cleared. Order finalized.", "success")
    }, 1500)
  }

  return (
    <DirectionProvider direction={direction}>
      <div className="relative min-h-screen bg-background font-sans text-foreground">
        {/* Toast Notification Mount */}
        <Toaster position="top-right" richColors />

        {/* Global CMD-K Command Dialog */}
        <CommandDialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
          <CommandInput placeholder="Type a command or component name..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem
                onSelect={() => {
                  setActiveTab("dashboard")
                  setIsCommandOpen(false)
                }}
              >
                <Home className="mr-2 h-4 w-4" />
                Go to Operations Dashboard
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setActiveTab("shop")
                  setIsCommandOpen(false)
                }}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Navigate to E-Commerce Shop
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setActiveTab("forms")
                  setIsCommandOpen(false)
                }}
              >
                <FileText className="mr-2 h-4 w-4" />
                Identity Forms & Verification
                <CommandShortcut>⌘F</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setActiveTab("sandbox")
                  setIsCommandOpen(false)
                }}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Explore Design System Playground
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Platform Operations">
              <CommandItem
                onSelect={() => {
                  setIsProductModalOpen(true)
                  setIsCommandOpen(false)
                }}
              >
                <Plus className="mr-2 h-4 w-4" />
                Create New Catalog Product
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setIsConfirmAlertOpen(true)
                  setIsCommandOpen(false)
                }}
              >
                <Play className="mr-2 h-4 w-4" />
                Simulate Order Verification Process
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>

        {/* Sidebar Navigation Layout */}
        <SidebarProvider defaultOpen={true}>
          <Sidebar collapsible="icon" variant="sidebar">
            <SidebarHeader className="flex items-center justify-between border-b px-4 py-3">
              <div className="flex items-center gap-2 text-lg font-bold select-none">
                <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Sparkles className="size-4 animate-pulse text-accent-foreground" />
                </div>
                <span className="font-heading font-semibold tracking-wide group-data-[collapsible=icon]:hidden">
                  RAVEN HQ
                </span>
              </div>
            </SidebarHeader>

            <SidebarContent>
              {/* Group 1: Navigation Main */}
              <SidebarGroup>
                <SidebarGroupLabel>Platform Operations</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeTab === "dashboard"}
                      onClick={() => setActiveTab("dashboard")}
                      tooltip="Operations Console"
                    >
                      <Home className="size-4" />
                      <span>Operations Console</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge className="rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground">
                      HQ
                    </SidebarMenuBadge>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeTab === "shop"}
                      onClick={() => setActiveTab("shop")}
                      tooltip="E-Commerce Catalog"
                    >
                      <ShoppingBag className="size-4" />
                      <span>E-Commerce Catalog</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>

              {/* Group 2: Identity & Design */}
              <SidebarGroup>
                <SidebarGroupLabel>Management</SidebarGroupLabel>
                <SidebarGroupAction
                  onClick={() =>
                    triggerToast(
                      "New verification workflow registered.",
                      "info"
                    )
                  }
                  title="Register Workflow"
                >
                  <Plus className="size-4" />
                </SidebarGroupAction>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeTab === "forms"}
                      onClick={() => setActiveTab("forms")}
                      tooltip="Form & Verification"
                    >
                      <FileText className="size-4" />
                      <span>Identity & Forms</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeTab === "sandbox"}
                      onClick={() => setActiveTab("sandbox")}
                      tooltip="Design System Sandbox"
                    >
                      <Sparkles className="size-4" />
                      <span>Component Sandbox</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>

              {/* Group 3: Skeleton Sidebar Mock */}
              <SidebarGroup className="mt-4">
                <SidebarGroupLabel>System Logs</SidebarGroupLabel>
                <SidebarGroupContent>
                  <div className="flex flex-col gap-1.5 px-2">
                    <SidebarMenuSkeleton showIcon={true} />
                    <SidebarMenuSkeleton showIcon={true} />
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t p-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <SidebarMenuButton className="h-12">
                          <Avatar className="size-8">
                            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=60" />
                            <AvatarFallback>RV</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col items-start text-xs group-data-[collapsible=icon]:hidden">
                            <span className="font-semibold text-foreground">
                              Sophia Pierce
                            </span>
                            <span className="text-muted-foreground">
                              sophia@raven.sh
                            </span>
                          </div>
                        </SidebarMenuButton>
                      }
                    />
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => setActiveTab("forms")}>
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile Settings</span>
                          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setIsCommandOpen(true)}
                        >
                          <CommandIcon className="mr-2 h-4 w-4" />
                          <span>Command Palette</span>
                          <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <Monitor className="mr-2 h-4 w-4" />
                          <span>Theme Settings</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem onClick={() => setTheme("dark")}>
                            <Moon className="mr-2 h-4 w-4" />
                            <span>Dark Theme</span>
                            {theme === "dark" && (
                              <Check className="ml-auto h-4 w-4" />
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setTheme("light")}>
                            <Sun className="mr-2 h-4 w-4" />
                            <span>Light Theme</span>
                            {theme === "light" && (
                              <Check className="ml-auto h-4 w-4" />
                            )}
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() =>
                          triggerToast(
                            "Session session logout initialized.",
                            "warning"
                          )
                        }
                      >
                        <Trash2 className="mr-2 h-4 w-4 text-destructive" />
                        <span className="font-medium text-destructive">
                          Log out
                        </span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>

          {/* Main Content Area */}
          <SidebarInset className="flex flex-col bg-background">
            {/* Top Workspace Header */}
            <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b bg-background/95 px-4 supports-backdrop-filter:backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <SidebarTrigger />
                <Separator orientation="vertical" className="h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setActiveTab("dashboard")
                        }}
                      >
                        HQ Portal
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="capitalize">
                        {activeTab}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              {/* Center Menu: Horizontal NavigationMenu */}
              <div className="hidden lg:block">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Operations</NavigationMenuTrigger>
                      <NavigationMenuContent className="grid w-[350px] grid-cols-1 gap-2 p-4">
                        <NavigationMenuLink
                          onClick={() => setActiveTab("dashboard")}
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold">
                              System Operations Console
                            </span>
                            <span className="text-xs text-muted-foreground">
                              Monitor platform statistics, revenue forecasts,
                              and processing performance.
                            </span>
                          </div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          onClick={() => setActiveTab("shop")}
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold">
                              Product Storefront Hub
                            </span>
                            <span className="text-xs text-muted-foreground">
                              Manage and edit all inventory assets in the
                              e-commerce sandbox.
                            </span>
                          </div>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        Global Configuration
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="w-[280px] p-4">
                        <div className="flex flex-col gap-2.5">
                          <h4 className="text-sm font-semibold">
                            Locale Options
                          </h4>
                          <ButtonGroup
                            orientation="horizontal"
                            className="w-full"
                          >
                            <Button
                              variant={
                                direction === "ltr" ? "default" : "outline"
                              }
                              size="xs"
                              onClick={() => {
                                setDirection("ltr")
                                triggerToast("Orientation set to LTR", "info")
                              }}
                              className="flex-1"
                            >
                              <Globe className="mr-1 size-3" /> LTR
                            </Button>
                            <Button
                              variant={
                                direction === "rtl" ? "default" : "outline"
                              }
                              size="xs"
                              onClick={() => {
                                setDirection("rtl")
                                triggerToast("Orientation set to RTL", "info")
                              }}
                              className="flex-1"
                            >
                              RTL <Globe className="ml-1 size-3" />
                            </Button>
                          </ButtonGroup>

                          <div className="mt-2 flex items-center justify-between border-t pt-2.5 text-xs">
                            <span className="font-medium text-muted-foreground">
                              Dark Mode Sync
                            </span>
                            <Switch
                              checked={theme === "dark"}
                              onCheckedChange={(val) => {
                                setTheme(val ? "dark" : "light")
                                triggerToast(
                                  `Toggled ${val ? "Dark" : "Light"} Mode`,
                                  "info"
                                )
                              }}
                            />
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Right Side Header Items */}
              <div className="flex items-center gap-3">
                {/* Search Dialog Trigger */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsCommandOpen(true)}
                  className="hidden items-center gap-2 text-xs text-muted-foreground hover:bg-muted sm:inline-flex"
                >
                  <Search className="size-3.5" />
                  <span>Search components...</span>
                  <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <Kbd>K</Kbd>
                  </KbdGroup>
                </Button>

                {/* Notifications Popover */}
                <Popover>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        className="relative"
                      >
                        <Bell className="size-4" />
                        <span className="absolute top-1 right-1 size-2 animate-ping rounded-full bg-destructive" />
                        <span className="absolute top-1 right-1 size-2 rounded-full bg-destructive" />
                      </Button>
                    }
                  />
                  <PopoverContent align="end" className="w-80 p-0">
                    <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2.5 text-sm font-semibold">
                      <span>Operational Alert Inbox</span>
                      <Badge
                        variant="destructive"
                        className="px-1.5 py-0.5 text-[10px]"
                      >
                        3 Active
                      </Badge>
                    </div>
                    <ScrollArea className="h-64">
                      <ItemGroup className="p-1">
                        <Item variant="muted" size="xs">
                          <ItemMedia variant="icon" className="text-blue-500">
                            <Info className="size-4" />
                          </ItemMedia>
                          <ItemContent>
                            <ItemTitle>Infrastructure Health Peak</ItemTitle>
                            <ItemDescription>
                              Core clusters operating at optimal efficiency
                              (99.8%).
                            </ItemDescription>
                          </ItemContent>
                          <ItemActions>
                            <span className="text-[10px] text-muted-foreground">
                              5m ago
                            </span>
                          </ItemActions>
                        </Item>

                        <ItemSeparator />

                        <Item variant="muted" size="xs">
                          <ItemMedia variant="icon" className="text-yellow-500">
                            <SlidersHorizontal className="size-4" />
                          </ItemMedia>
                          <ItemContent>
                            <ItemTitle>Auto-Scaling Triggered</ItemTitle>
                            <ItemDescription>
                              Assigned +2 compute instances to pool.
                            </ItemDescription>
                          </ItemContent>
                          <ItemActions>
                            <span className="text-[10px] text-muted-foreground">
                              1h ago
                            </span>
                          </ItemActions>
                        </Item>
                      </ItemGroup>
                    </ScrollArea>
                  </PopoverContent>
                </Popover>

                {/* Simple Settings Dialog */}
                <Dialog>
                  <DialogTrigger
                    render={
                      <Button variant="ghost" size="icon-sm">
                        <Settings className="size-4" />
                      </Button>
                    }
                  />
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Quick Configuration Manager</DialogTitle>
                      <DialogDescription>
                        Modify platform thresholds and default identity filters.
                        All parameters update active environment.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-2 text-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium">
                            Sandbox Diagnostics Logs
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Store debugging events local context.
                          </span>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      <Separator />
                      <div className="flex flex-col gap-1.5">
                        <span className="font-medium">
                          Clear Cache Database
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Wipes all cached templates from current browser
                          session.
                        </span>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() =>
                            triggerToast(
                              "Mock Cache Cleared Successfully.",
                              "success"
                            )
                          }
                          className="mt-1 w-fit"
                        >
                          Flush Environment Cache
                        </Button>
                      </div>
                    </div>
                    <DialogFooter showCloseButton={true} />
                  </DialogContent>
                </Dialog>

                {/* Mobile Navigation Trigger Sheet */}
                <Sheet>
                  <SheetTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        className="lg:hidden"
                      >
                        <Menu className="size-4" />
                      </Button>
                    }
                  />
                  <SheetContent side="right">
                    <SheetHeader>
                      <SheetTitle>Navigation Directory</SheetTitle>
                      <SheetDescription>
                        Jump to sections in the dashboard showcase.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col gap-3 py-4">
                      <Button
                        variant={
                          activeTab === "dashboard" ? "default" : "outline"
                        }
                        onClick={() => setActiveTab("dashboard")}
                        className="w-full justify-start"
                      >
                        <Home className="mr-2 h-4 w-4" /> Operations Console
                      </Button>
                      <Button
                        variant={activeTab === "shop" ? "default" : "outline"}
                        onClick={() => setActiveTab("shop")}
                        className="w-full justify-start"
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" /> E-Commerce
                        Catalog
                      </Button>
                      <Button
                        variant={activeTab === "forms" ? "default" : "outline"}
                        onClick={() => setActiveTab("forms")}
                        className="w-full justify-start"
                      >
                        <FileText className="mr-2 h-4 w-4" /> Identity & Forms
                      </Button>
                      <Button
                        variant={
                          activeTab === "sandbox" ? "default" : "outline"
                        }
                        onClick={() => setActiveTab("sandbox")}
                        className="w-full justify-start"
                      >
                        <Sparkles className="mr-2 h-4 w-4" /> Design Sandbox
                      </Button>
                    </div>
                    <SheetFooter>
                      <SheetClose
                        render={
                          <Button variant="outline" className="w-full">
                            Dismiss
                          </Button>
                        }
                      />
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </header>

            {/* Global Alert Notification Banner */}
            <div className="px-6 pt-4">
              <Alert
                variant="default"
                className="border-primary/20 bg-primary/5 dark:bg-primary/10"
              >
                <Info className="size-4 text-primary dark:text-accent-foreground" />
                <AlertTitle className="text-sm font-semibold">
                  Platform Demo Sandbox active
                </AlertTitle>
                <AlertDescription className="text-xs">
                  Showing all components from `/components/ui/` styled with
                  RAVEN theme. Press{" "}
                  <KbdGroup className="mx-1">
                    <Kbd>⌘</Kbd>
                    <Kbd>K</Kbd>
                  </KbdGroup>{" "}
                  to toggle commands palette.
                </AlertDescription>
                <AlertAction>
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={() =>
                      triggerToast("Diagnostic suite initialized.", "info")
                    }
                  >
                    Run Diagnosis Suite
                  </Button>
                </AlertAction>
              </Alert>
            </div>

            {/* View Render Area */}
            <main className="flex-1 overflow-y-auto p-6">
              {/* PAGE 1: ANALYTICS OPERATIONS */}
              {activeTab === "dashboard" && (
                <div className="space-y-6">
                  {/* Metric Cards Row */}
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1: Total Revenue */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Estimated Sales Volume
                        </CardTitle>
                        <CardAction>
                          <HoverCard>
                            <HoverCardTrigger
                              render={
                                <Button variant="ghost" size="icon-xs">
                                  <HelpCircle className="size-3.5 text-muted-foreground" />
                                </Button>
                              }
                            />
                            <HoverCardContent className="w-60">
                              <div className="flex gap-2">
                                <div className="space-y-1">
                                  <h4 className="text-xs font-semibold">
                                    Revenue Metrics
                                  </h4>
                                  <p className="text-[11px] text-muted-foreground">
                                    Total value of processed contracts & product
                                    downloads during this monthly interval.
                                  </p>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        </CardAction>
                      </CardHeader>
                      <CardContent>
                        <div className="font-heading text-2xl font-bold">
                          $189,400.00
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          +18.4% from last period
                        </p>
                      </CardContent>
                    </Card>

                    {/* Card 2: Operations Progress */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Fulfillment Quota
                        </CardTitle>
                        <CardAction>
                          <Badge variant="secondary">Goal: 85%</Badge>
                        </CardAction>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="font-heading text-2xl font-bold">
                          79.2%
                        </div>
                        <Progress value={79.2} className="h-1.5 bg-secondary" />
                      </CardContent>
                    </Card>

                    {/* Card 3: Platform Operations */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Deploy Instances
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="font-heading text-2xl font-bold">
                          4,810 Active
                        </div>
                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
                          <span className="text-xs text-muted-foreground">
                            All containers healthy
                          </span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Card 4: Operations Quick Action */}
                    <Card className="flex flex-col justify-between">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Cleared Clearance
                        </CardTitle>
                        <CardDescription className="text-xs">
                          Execute immediate clearance tests.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex items-end justify-between pt-0 pb-3">
                        {/* Alert Dialog (Trigger 1) */}
                        <AlertDialog
                          open={isConfirmAlertOpen}
                          onOpenChange={setIsConfirmAlertOpen}
                        >
                          <AlertDialogTrigger
                            render={
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                              >
                                <Play className="mr-1.5 size-3.5" /> Execute
                                Clearance
                              </Button>
                            }
                          />
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogMedia className="bg-destructive/10 text-destructive">
                                <Trash2 className="size-5" />
                              </AlertDialogMedia>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This will simulate clearing all pending order
                                databases and force status refresh. This action
                                is not reversible.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={handleOrderSimulate}
                                className="text-destructive-foreground bg-destructive hover:bg-destructive/90"
                              >
                                Proceed with Clearance
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Chart Section */}
                  <Card className="col-span-4">
                    <Tabs defaultValue="sales" className="w-full gap-0">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div>
                          <CardTitle>Sales Revenue Progression</CardTitle>
                          <CardDescription>
                            Forecast intervals compared to target thresholds.
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-4">
                          <TabsList className="flex rounded-lg bg-muted p-[3px]">
                            <TabsTrigger
                              value="sales"
                              className="px-3 py-1 text-xs"
                            >
                              Sales Trend
                            </TabsTrigger>
                            <TabsTrigger
                              value="targets"
                              className="px-3 py-1 text-xs"
                            >
                              Target Goals
                            </TabsTrigger>
                          </TabsList>
                          <div className="hidden items-center gap-2 sm:flex">
                            <ButtonGroup>
                              <Button size="xs" variant="outline">
                                Day
                              </Button>
                              <Button
                                size="xs"
                                variant="outline"
                                className="bg-muted"
                              >
                                Month
                              </Button>
                              <Button size="xs" variant="outline">
                                Year
                              </Button>
                            </ButtonGroup>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="h-72 pt-0">
                        <TabsContent
                          value="sales"
                          className="h-full w-full outline-none"
                        >
                          <ChartContainer
                            config={chartConfig}
                            className="h-full w-full"
                          >
                            <AreaChart
                              data={chartData}
                              margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                              }}
                            >
                              <defs>
                                <linearGradient
                                  id="colorSales"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    offset="5%"
                                    stopColor="oklch(0.205 0 0)"
                                    stopOpacity={0.2}
                                  />
                                  <stop
                                    offset="95%"
                                    stopColor="oklch(0.205 0 0)"
                                    stopOpacity={0}
                                  />
                                </linearGradient>
                                <linearGradient
                                  id="colorTarget"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    offset="5%"
                                    stopColor="oklch(0.556 0 0)"
                                    stopOpacity={0.1}
                                  />
                                  <stop
                                    offset="95%"
                                    stopColor="oklch(0.556 0 0)"
                                    stopOpacity={0}
                                  />
                                </linearGradient>
                              </defs>
                              <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                              />
                              <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                              />
                              <YAxis tickLine={false} axisLine={false} />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Area
                                type="monotone"
                                dataKey="sales"
                                stroke="oklch(0.205 0 0)"
                                fillOpacity={1}
                                fill="url(#colorSales)"
                                strokeWidth={2}
                              />
                              <Area
                                type="monotone"
                                dataKey="target"
                                stroke="oklch(0.556 0 0)"
                                fillOpacity={1}
                                fill="url(#colorTarget)"
                                strokeWidth={1.5}
                                strokeDasharray="4 4"
                              />
                              <ChartLegend content={<ChartLegendContent />} />
                            </AreaChart>
                          </ChartContainer>
                        </TabsContent>
                        <TabsContent
                          value="targets"
                          className="h-full w-full outline-none"
                        >
                          <ChartContainer
                            config={chartConfig}
                            className="h-full w-full"
                          >
                            <BarChart
                              data={chartData}
                              margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                              }}
                            >
                              <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                              />
                              <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                              />
                              <YAxis tickLine={false} axisLine={false} />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar
                                dataKey="target"
                                fill="var(--color-target)"
                                radius={[4, 4, 0, 0]}
                              />
                              <Bar
                                dataKey="sales"
                                fill="var(--color-sales)"
                                radius={[4, 4, 0, 0]}
                              />
                              <ChartLegend content={<ChartLegendContent />} />
                            </BarChart>
                          </ChartContainer>
                        </TabsContent>
                      </CardContent>
                    </Tabs>
                  </Card>

                  {/* Transactions Table Section */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Recent Clearing Ledger</CardTitle>
                        <CardDescription>
                          Real-time order statuses inside Raven ecosystem.
                        </CardDescription>
                      </div>

                      {/* Dialog Add Product Trigger */}
                      <Dialog
                        open={isProductModalOpen}
                        onOpenChange={setIsProductModalOpen}
                      >
                        <DialogTrigger
                          render={
                            <Button variant="default" size="sm">
                              <Plus className="mr-1.5 size-4" /> Create Product
                              Template
                            </Button>
                          }
                        />
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Create New Product Entry</DialogTitle>
                            <DialogDescription>
                              Specify details to establish a mockup template in
                              the Catalog inventory.
                            </DialogDescription>
                          </DialogHeader>
                          <form
                            onSubmit={handleProductSubmit}
                            className="space-y-4 py-2"
                          >
                            <Field>
                              <FieldLabel>Product Title</FieldLabel>
                              <Input
                                placeholder="e.g. Raven Enterprise Cloud Node"
                                required
                              />
                              <FieldDescription>
                                The consumer-facing name of the asset.
                              </FieldDescription>
                            </Field>
                            <div className="grid grid-cols-2 gap-4">
                              <Field>
                                <FieldLabel>Pricing (USD)</FieldLabel>
                                <Input
                                  type="number"
                                  defaultValue="299"
                                  required
                                />
                              </Field>
                              <Field>
                                <FieldLabel>Category</FieldLabel>
                                <Select defaultValue="software">
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Category" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="software">
                                      Software
                                    </SelectItem>
                                    <SelectItem value="uipack">
                                      UI Kit
                                    </SelectItem>
                                    <SelectItem value="design">
                                      Design
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </Field>
                            </div>
                            <DialogFooter showCloseButton={true}>
                              <Button type="submit" variant="default">
                                Initialize Template
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead className="hidden md:table-cell">
                              Transaction ID
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Clearing Date
                            </TableHead>
                            <TableHead>Fulfillment Status</TableHead>
                            <TableHead className="text-end">Amount</TableHead>
                            <TableHead className="text-end">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {transactions.map((tx) => (
                            <TableRow key={tx.id}>
                              <TableCell className="font-medium">
                                <div className="flex items-center gap-2.5">
                                  <Avatar size="sm">
                                    <AvatarFallback>{tx.avatar}</AvatarFallback>
                                  </Avatar>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-medium">
                                      {tx.customer}
                                    </span>
                                    <span className="hidden text-xs text-muted-foreground sm:inline">
                                      {tx.email}
                                    </span>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="hidden font-mono text-xs md:table-cell">
                                {tx.id}
                              </TableCell>
                              <TableCell className="hidden text-xs md:table-cell">
                                {tx.date}
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    tx.status === "Completed"
                                      ? "default"
                                      : tx.status === "Pending"
                                        ? "secondary"
                                        : "destructive"
                                  }
                                  className="text-[11px]"
                                >
                                  {tx.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-end font-mono text-sm">
                                {tx.amount}
                              </TableCell>
                              <TableCell className="text-end">
                                <DropdownMenu>
                                  <DropdownMenuTrigger
                                    render={
                                      <Button variant="ghost" size="icon-xs">
                                        <ChevronRight className="size-3.5Rotate" />
                                      </Button>
                                    }
                                  />
                                  <DropdownMenuContent
                                    align="end"
                                    className="w-40"
                                  >
                                    <DropdownMenuLabel>
                                      Actions
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                      onClick={() =>
                                        triggerToast(
                                          `Copied ${tx.id} Ledger`,
                                          "success"
                                        )
                                      }
                                    >
                                      <Copy className="mr-2 h-3.5 w-3.5" /> Copy
                                      ID
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      onClick={() =>
                                        triggerToast(
                                          `Refreshed ${tx.id} status`,
                                          "info"
                                        )
                                      }
                                    >
                                      <RotateCcw className="mr-2 h-3.5 w-3.5" />{" "}
                                      Re-trigger
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                      variant="destructive"
                                      onClick={() =>
                                        triggerToast(
                                          `Deleted transaction record`,
                                          "error"
                                        )
                                      }
                                    >
                                      <Trash2 className="mr-2 h-3.5 w-3.5" />{" "}
                                      Delete
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* PAGE 2: E-COMMERCE SHOP CATALOG */}
              {activeTab === "shop" && (
                <div className="space-y-6">
                  {/* Hero Slider Banner (Carousel) */}
                  <div className="px-10 py-2">
                    <Carousel className="mx-auto w-full max-w-5xl">
                      <CarouselContent>
                        <CarouselItem>
                          <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-xl border bg-card p-6 md:flex-row md:p-10">
                            <div className="flex-1 space-y-3">
                              <Badge className="bg-primary font-semibold text-primary-foreground">
                                NEW SYSTEM RELEASE
                              </Badge>
                              <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
                                RAVEN UI Kits Released
                              </h2>
                              <p className="max-w-md text-sm text-muted-foreground">
                                Build premium interfaces in seconds. Tailwind
                                CSS v4.0 optimized, fully dark-mode responsive,
                                powered by Base UI.
                              </p>
                              <Button
                                size="sm"
                                onClick={() =>
                                  triggerToast(
                                    "Opening kit store...",
                                    "success"
                                  )
                                }
                              >
                                Get Access License
                              </Button>
                            </div>
                            <div className="w-full shrink-0 md:w-80">
                              <AspectRatio
                                ratio={16 / 9}
                                className="overflow-hidden rounded-lg"
                              >
                                <img
                                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60"
                                  alt="Raven UI banner"
                                  className="size-full object-cover"
                                />
                              </AspectRatio>
                            </div>
                          </div>
                        </CarouselItem>

                        <CarouselItem>
                          <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-xl border bg-card p-6 md:flex-row md:p-10">
                            <div className="flex-1 space-y-3">
                              <Badge
                                variant="secondary"
                                className="font-semibold"
                              >
                                ENVIRONMENT UPDATE
                              </Badge>
                              <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
                                Cloud Devops Templates
                              </h2>
                              <p className="max-w-md text-sm text-muted-foreground">
                                Automated Terraform modules and server setup
                                playbooks tailored to RAVEN services schema.
                              </p>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  triggerToast("Opening docs...", "info")
                                }
                              >
                                Browse Configs
                              </Button>
                            </div>
                            <div className="w-full shrink-0 md:w-80">
                              <AspectRatio
                                ratio={16 / 9}
                                className="overflow-hidden rounded-lg"
                              >
                                <img
                                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&auto=format&fit=crop&q=60"
                                  alt="Devops blueprint banner"
                                  className="size-full object-cover"
                                />
                              </AspectRatio>
                            </div>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>

                  {/* Main Catalog Explorer Shell */}
                  <div className="grid gap-6 md:grid-cols-4">
                    {/* Left Filters Box */}
                    <div className="h-fit space-y-5 rounded-xl border bg-card p-4 md:col-span-1">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="flex items-center gap-1.5 text-sm font-semibold">
                          <SlidersHorizontal className="size-4" /> Filters
                        </span>
                        <Button
                          variant="ghost"
                          size="xs"
                          className="text-xs text-muted-foreground"
                          onClick={() => {
                            setSearchTerm("")
                            setInStockOnly(false)
                            setPriceRange([100])
                            setSelectedCategory("All")
                          }}
                        >
                          Reset
                        </Button>
                      </div>

                      {/* Search group */}
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">
                          Search Catalog
                        </Label>
                        <InputGroup>
                          <InputGroupInput
                            placeholder="Type title..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          {searchTerm && (
                            <InputGroupAddon align="inline-end">
                              <InputGroupButton
                                size="icon-xs"
                                variant="ghost"
                                onClick={() => setSearchTerm("")}
                              >
                                <X className="size-3" />
                              </InputGroupButton>
                            </InputGroupAddon>
                          )}
                        </InputGroup>
                      </div>

                      {/* Accordion Filters */}
                      <Accordion defaultValue={["categories"]}>
                        <AccordionItem value="categories">
                          <AccordionTrigger>Filter Categories</AccordionTrigger>
                          <AccordionContent>
                            <div ref={comboboxAnchorRef} className="py-1">
                              {/* Combobox wrapper */}
                              <Combobox
                                value={selectedCategory}
                                onValueChange={(val) =>
                                  setSelectedCategory(val || "All")
                                }
                              >
                                <ComboboxInput placeholder="Select category..." />
                                <ComboboxContent anchor={comboboxAnchorRef}>
                                  <ComboboxList>
                                    <ComboboxItem value="All">
                                      All Categories
                                    </ComboboxItem>
                                    <ComboboxItem value="Software">
                                      Software
                                    </ComboboxItem>
                                    <ComboboxItem value="UI Kits">
                                      UI Kits
                                    </ComboboxItem>
                                    <ComboboxItem value="Blueprints">
                                      Blueprints
                                    </ComboboxItem>
                                    <ComboboxItem value="Design">
                                      Design
                                    </ComboboxItem>
                                  </ComboboxList>
                                </ComboboxContent>
                              </Combobox>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="price">
                          <AccordionTrigger>Max Pricing</AccordionTrigger>
                          <AccordionContent className="pt-2">
                            <div className="space-y-3">
                              <Slider
                                value={priceRange}
                                onValueChange={(val) =>
                                  setPriceRange(
                                    Array.isArray(val) ? [...val] : [val]
                                  )
                                }
                                max={1000}
                                step={20}
                              />
                              <div className="flex items-center justify-between font-mono text-xs">
                                <span>$0</span>
                                <span className="font-semibold text-primary">
                                  ${priceRange[0]}
                                </span>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      {/* Toggle Filters */}
                      <div className="space-y-3.5 pt-2">
                        <div className="flex items-center justify-between">
                          <Label
                            htmlFor="stock-switch"
                            className="cursor-pointer text-xs select-none"
                          >
                            In Stock Only
                          </Label>
                          <Switch
                            id="stock-switch"
                            checked={inStockOnly}
                            onCheckedChange={setInStockOnly}
                          />
                        </div>
                        <Separator />
                        <div className="space-y-2">
                          <Label className="text-xs font-semibold">
                            Sort Order
                          </Label>
                          <RadioGroup
                            value={selectedSort}
                            onValueChange={setSelectedSort}
                            className="gap-2"
                          >
                            <div className="flex items-center gap-2">
                              <RadioGroupItem value="popular" id="r-popular" />
                              <Label
                                htmlFor="r-popular"
                                className="cursor-pointer text-xs"
                              >
                                Most Popular
                              </Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <RadioGroupItem value="price-asc" id="r-low" />
                              <Label
                                htmlFor="r-low"
                                className="cursor-pointer text-xs"
                              >
                                Price: Low to High
                              </Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <RadioGroupItem value="price-desc" id="r-high" />
                              <Label
                                htmlFor="r-high"
                                className="cursor-pointer text-xs"
                              >
                                Price: High to Low
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>

                    {/* Right Product Grid */}
                    <div className="space-y-6 md:col-span-3">
                      {/* Filter stats & layout select */}
                      <div className="flex items-center justify-between border-b pb-3">
                        <span className="text-xs font-medium text-muted-foreground">
                          Showing 4 registered templates
                        </span>

                        <div className="flex items-center gap-2">
                          <Select defaultValue="usd">
                            <SelectTrigger className="h-7 w-24">
                              <SelectValue placeholder="Currency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="usd">USD ($)</SelectItem>
                              <SelectItem value="eur">EUR (€)</SelectItem>
                              <SelectItem value="gbp">GBP (£)</SelectItem>
                            </SelectContent>
                          </Select>

                          <ToggleGroup defaultValue={["grid"]}>
                            <ToggleGroupItem
                              value="grid"
                              aria-label="Grid View"
                            >
                              <span className="text-xs">Grid</span>
                            </ToggleGroupItem>
                            <ToggleGroupItem
                              value="list"
                              aria-label="List View"
                            >
                              <span className="text-xs">List</span>
                            </ToggleGroupItem>
                          </ToggleGroup>
                        </div>
                      </div>

                      {/* Products Grid */}
                      {(() => {
                        const filtered = storefrontProducts.filter((p) => {
                          const matchesSearch = p.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                          const matchesCategory =
                            selectedCategory === "All" ||
                            p.category === selectedCategory
                          const matchesPrice = p.price <= priceRange[0]
                          return (
                            matchesSearch && matchesCategory && matchesPrice
                          )
                        })

                        if (filtered.length === 0) {
                          return (
                            <Empty className="border bg-card/20 py-12">
                              <EmptyHeader>
                                <EmptyMedia
                                  variant="icon"
                                  className="text-muted-foreground"
                                >
                                  <ShoppingBag className="size-6" />
                                </EmptyMedia>
                                <EmptyTitle>No Products Found</EmptyTitle>
                                <EmptyDescription>
                                  We couldn't find matches for search
                                  configuration. Try clearing your filters.
                                </EmptyDescription>
                              </EmptyHeader>
                              <EmptyContent>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setSearchTerm("")
                                    setSelectedCategory("All")
                                    setPriceRange([1000])
                                  }}
                                >
                                  Reset Catalog Filters
                                </Button>
                              </EmptyContent>
                            </Empty>
                          )
                        }

                        return (
                          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                            {filtered.map((product) => (
                              <ContextMenu key={product.id}>
                                <ContextMenuTrigger
                                  render={
                                    <Card className="group/card-wrapper relative flex h-full flex-col transition-shadow hover:shadow-md">
                                      <AspectRatio
                                        ratio={4 / 3}
                                        className="relative overflow-hidden bg-muted"
                                      >
                                        <img
                                          src={product.image}
                                          alt={product.name}
                                          className="size-full object-cover transition-transform duration-300 group-hover/card-wrapper:scale-105"
                                        />
                                        <div className="absolute top-2.5 right-2.5">
                                          {/* Toggle button */}
                                          <Toggle
                                            variant="outline"
                                            size="sm"
                                            className="rounded-full bg-background/80 backdrop-blur-xs hover:bg-background"
                                          >
                                            <Heart className="size-3.5 fill-none text-muted-foreground group-aria-pressed:fill-destructive group-aria-pressed:text-destructive" />
                                          </Toggle>
                                        </div>
                                      </AspectRatio>
                                      <CardHeader className="p-4 pb-1">
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                          <span>{product.category}</span>
                                          <div className="flex items-center gap-1">
                                            <Sparkles className="size-3 fill-yellow-500 text-yellow-500" />
                                            <span className="font-semibold text-foreground">
                                              {product.rating}
                                            </span>
                                          </div>
                                        </div>
                                        <CardTitle className="mt-1 text-sm leading-snug font-medium">
                                          {product.name}
                                        </CardTitle>
                                      </CardHeader>
                                      <CardContent className="flex flex-1 items-end justify-between p-4 pt-1">
                                        <span className="font-mono text-lg font-semibold">
                                          ${product.price}
                                        </span>

                                        {/* Drawer details preview (Trigger 2) */}
                                        <Drawer>
                                          <DrawerTrigger asChild>
                                            <Button size="xs" variant="outline">
                                              <Eye className="mr-1 size-3" />{" "}
                                              Quick Details
                                            </Button>
                                          </DrawerTrigger>
                                          <DrawerContent>
                                            <DrawerHeader>
                                              <DrawerTitle>
                                                {product.name}
                                              </DrawerTitle>
                                              <DrawerDescription>
                                                In Stock • Verified Secure
                                                Software Distribution
                                              </DrawerDescription>
                                            </DrawerHeader>
                                            <div className="mx-auto max-w-md space-y-4 p-4 text-sm">
                                              <AspectRatio
                                                ratio={16 / 9}
                                                className="overflow-hidden rounded-lg"
                                              >
                                                <img
                                                  src={product.image}
                                                  alt={product.name}
                                                  className="size-full object-cover"
                                                />
                                              </AspectRatio>
                                              <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                  <span className="text-muted-foreground">
                                                    License Category
                                                  </span>
                                                  <Badge>
                                                    {product.category}
                                                  </Badge>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                  <span className="text-muted-foreground">
                                                    Unit price
                                                  </span>
                                                  <span className="font-mono font-bold">
                                                    ${product.price} USD
                                                  </span>
                                                </div>
                                                <p className="pt-2 text-xs leading-normal text-muted-foreground">
                                                  All purchases include lifetime
                                                  software security patch
                                                  updates, access keys directory
                                                  deployment manuals, and 24/7
                                                  dedicated engineers operations
                                                  support.
                                                </p>
                                              </div>
                                            </div>
                                            <DrawerFooter>
                                              <Button
                                                variant="default"
                                                onClick={() => {
                                                  triggerToast(
                                                    "Purchase initialized.",
                                                    "success"
                                                  )
                                                }}
                                              >
                                                Purchase License
                                              </Button>
                                              <DrawerClose asChild>
                                                <Button variant="outline">
                                                  Cancel
                                                </Button>
                                              </DrawerClose>
                                            </DrawerFooter>
                                          </DrawerContent>
                                        </Drawer>
                                      </CardContent>
                                    </Card>
                                  }
                                />

                                {/* Context Menu triggers on right click */}
                                <ContextMenuContent className="w-48">
                                  <ContextMenuLabel>
                                    Product Options
                                  </ContextMenuLabel>
                                  <ContextMenuSeparator />
                                  <ContextMenuItem
                                    onClick={() =>
                                      triggerToast(
                                        `Copied product details: ${product.name}`,
                                        "success"
                                      )
                                    }
                                  >
                                    <Copy className="mr-2 h-3.5 w-3.5" /> Copy
                                    Product Title
                                  </ContextMenuItem>
                                  <ContextMenuItem
                                    onClick={() =>
                                      triggerToast(
                                        `Product favorited.`,
                                        "success"
                                      )
                                    }
                                  >
                                    <Heart className="mr-2 h-3.5 w-3.5 text-destructive" />{" "}
                                    Add to Wishlist
                                  </ContextMenuItem>
                                  <ContextMenuSeparator />
                                  <ContextMenuSub>
                                    <ContextMenuSubTrigger>
                                      Share Product
                                    </ContextMenuSubTrigger>
                                    <ContextMenuSubContent className="w-36">
                                      <ContextMenuItem
                                        onClick={() =>
                                          triggerToast(
                                            `Copied product link.`,
                                            "success"
                                          )
                                        }
                                      >
                                        <Share2 className="mr-2 h-3.5 w-3.5" />{" "}
                                        Copy Link
                                      </ContextMenuItem>
                                      <ContextMenuItem
                                        onClick={() =>
                                          triggerToast(
                                            `Email draft generated.`,
                                            "info"
                                          )
                                        }
                                      >
                                        <Mail className="mr-2 h-3.5 w-3.5" />{" "}
                                        Email
                                      </ContextMenuItem>
                                    </ContextMenuSubContent>
                                  </ContextMenuSub>
                                </ContextMenuContent>
                              </ContextMenu>
                            ))}
                          </div>
                        )
                      })()}

                      {/* Pagination Component */}
                      <div className="flex justify-center border-t pt-4">
                        <Pagination>
                          <PaginationContent>
                            <PaginationItem>
                              <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault()
                                  triggerToast("Previous page", "info")
                                }}
                              />
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink
                                href="#"
                                isActive
                                className="bg-muted"
                              >
                                1
                              </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault()
                                  triggerToast("Go to page 2", "info")
                                }}
                              >
                                2
                              </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationNext
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault()
                                  triggerToast("Next page", "info")
                                }}
                              />
                            </PaginationItem>
                          </PaginationContent>
                        </Pagination>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PAGE 3: IDENTITY & FORMS VERIFICATION */}
              {activeTab === "forms" && (
                <div className="mx-auto max-w-2xl space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Identity Verification Operations</CardTitle>
                      <CardDescription>
                        Complete the validation workflow checklist to register
                        keys directory operations.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault()
                          setFormSubmitted(true)
                          triggerToast(
                            "Forms data uploaded successfully.",
                            "success"
                          )
                        }}
                        className="space-y-6"
                      >
                        <FieldSet>
                          <FieldLegend variant="legend">
                            Security Contacts Configuration
                          </FieldLegend>

                          <FieldGroup>
                            {/* Email Field */}
                            <Field>
                              <FieldLabel>Operation Officer Email</FieldLabel>
                              <InputGroup>
                                <InputGroupAddon align="inline-start">
                                  <Mail className="size-4" />
                                </InputGroupAddon>
                                <InputGroupInput
                                  type="email"
                                  placeholder="officer@raven.sh"
                                  value={formEmail}
                                  onChange={(e) => setFormEmail(e.target.value)}
                                  required
                                />
                              </InputGroup>
                              <FieldDescription>
                                Verification notices will route here.
                              </FieldDescription>
                              {formSubmitted && !formEmail && (
                                <FieldError>
                                  Officer email is required for secure
                                  authorization.
                                </FieldError>
                              )}
                            </Field>

                            {/* SMS Verification OTP Code */}
                            <Field>
                              <FieldLabel>
                                Secure Authorization PIN (OTP)
                              </FieldLabel>
                              <FieldContent>
                                <InputOTP
                                  maxLength={6}
                                  value={otpCode}
                                  onChange={setOtpCode}
                                >
                                  <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                  </InputOTPGroup>
                                  <InputOTPSeparator />
                                  <InputOTPGroup>
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                  </InputOTPGroup>
                                </InputOTP>
                              </FieldContent>
                              <FieldDescription>
                                6-digit SMS verification token sent to
                                registered phone.
                              </FieldDescription>
                            </Field>
                          </FieldGroup>
                        </FieldSet>

                        <FieldSeparator>
                          <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            Operational Meta
                          </span>
                        </FieldSeparator>

                        <FieldSet>
                          <FieldGroup>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              {/* Native Select & Select */}
                              <Field>
                                <FieldLabel>Clearing Base Country</FieldLabel>
                                <NativeSelect
                                  value={selectedCountry}
                                  onChange={(e) =>
                                    setSelectedCountry(e.target.value)
                                  }
                                  className="w-full"
                                >
                                  <NativeSelectOption value="us">
                                    United States (USD)
                                  </NativeSelectOption>
                                  <NativeSelectOption value="uk">
                                    United Kingdom (GBP)
                                  </NativeSelectOption>
                                  <NativeSelectOption value="eu">
                                    European Union (EUR)
                                  </NativeSelectOption>
                                  <NativeSelectOption value="jp">
                                    Japan (JPY)
                                  </NativeSelectOption>
                                </NativeSelect>
                                <FieldDescription>
                                  Base currency operations context.
                                </FieldDescription>
                              </Field>

                              {/* Calendar Date Picker Popover */}
                              <Field>
                                <FieldLabel>Fulfillment Target Date</FieldLabel>
                                <Popover>
                                  <PopoverTrigger
                                    render={
                                      <Button
                                        variant="outline"
                                        className="h-8 w-full justify-start text-left text-xs font-normal"
                                      >
                                        <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                                        {shippingDate ? (
                                          shippingDate.toDateString()
                                        ) : (
                                          <span>Pick shipping target</span>
                                        )}
                                      </Button>
                                    }
                                  />
                                  <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                  >
                                    <Calendar
                                      mode="single"
                                      selected={shippingDate}
                                      onSelect={setShippingDate}
                                      className="rounded-md border"
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FieldDescription>
                                  Expected audit interval completion.
                                </FieldDescription>
                              </Field>
                            </div>

                            {/* Textarea Field */}
                            <Field>
                              <FieldLabel>
                                Additional Clearance Declarations
                              </FieldLabel>
                              <Textarea
                                placeholder="State any custom clearance criteria..."
                                value={formNotes}
                                onChange={(e) => setFormNotes(e.target.value)}
                                className="min-h-24 resize-none"
                              />
                            </Field>
                          </FieldGroup>
                        </FieldSet>

                        <div className="flex items-center gap-2 px-1 pt-2">
                          <Checkbox id="terms" required />
                          <Label
                            htmlFor="terms"
                            className="cursor-pointer text-xs select-none"
                          >
                            I certify that all operational clearance
                            declarations are accurate.
                          </Label>
                        </div>

                        <CardFooter className="-mx-6 mt-4 -mb-6 flex items-center justify-end gap-3 border-t bg-muted/40 p-4">
                          <Button
                            variant="ghost"
                            type="button"
                            onClick={() => {
                              setFormEmail("")
                              setOtpCode("")
                              setFormNotes("")
                              setFormSubmitted(false)
                            }}
                          >
                            Reset Form
                          </Button>
                          <Button type="submit">Submit Verification</Button>
                        </CardFooter>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* PAGE 4: DESIGN SYSTEM SANDBOX PLAYGROUND */}
              {activeTab === "sandbox" && (
                <div className="flex h-[600px] flex-col overflow-hidden rounded-xl border bg-card shadow-sm">
                  {/* Sandbox Toolbar */}
                  <Menubar className="rounded-none border-b px-4">
                    <MenubarMenu>
                      <MenubarTrigger>System Theme</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem onClick={() => setTheme("dark")}>
                          Dark Theme
                        </MenubarItem>
                        <MenubarItem onClick={() => setTheme("light")}>
                          Light Theme
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarCheckboxItem
                          checked={direction === "rtl"}
                          onCheckedChange={(val) =>
                            setDirection(val ? "rtl" : "ltr")
                          }
                        >
                          RTL Reading Mode
                        </MenubarCheckboxItem>
                      </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                      <MenubarTrigger>Verify Actions</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem
                          onClick={() =>
                            triggerToast(
                              "Verifying framework packages...",
                              "info"
                            )
                          }
                        >
                          Run Lint Checklist
                        </MenubarItem>
                        <MenubarItem
                          onClick={() =>
                            triggerToast(
                              "Assets directories healthy",
                              "success"
                            )
                          }
                        >
                          Scan Directories
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>

                  {/* Resizable Sandbox Panels */}
                  <ResizablePanelGroup
                    orientation="horizontal"
                    className="flex-1"
                  >
                    {/* Left Index Scroll Area */}
                    <ResizablePanel defaultSize={30} minSize={20}>
                      <div className="flex h-full flex-col">
                        <div className="border-b bg-muted/30 p-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                          Component Explorer Index
                        </div>
                        <ScrollArea className="flex-1">
                          <div className="space-y-1 p-2">
                            {[
                              "Accordion & Collapsible",
                              "Alert & Alert Dialog",
                              "Avatar Group",
                              "Badge & Custom Tags",
                              "Breadcrumbs List",
                              "Carousel Banner",
                              "Charts & Analytics",
                              "Command Dialog",
                              "Dialog Modal",
                              "Drawer Drawer",
                              "Dropdown & Menubar",
                              "Form Input OTP",
                              "Progress Goal Meter",
                              "Resizable Panels",
                              "Scroll Area Box",
                              "Select & Native Select",
                              "Sonner Toast Notifications",
                              "Spinner & Skeletons",
                              "Tabs Section",
                              "Table Database",
                              "Tooltip Info Cards",
                            ].map((component, idx) => (
                              <button
                                key={idx}
                                className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs transition-colors hover:bg-muted/50"
                                onClick={() =>
                                  triggerToast(
                                    `Exploring mockup documentation for ${component}`,
                                    "info"
                                  )
                                }
                              >
                                <span>{component}</span>
                                <ChevronRight className="size-3 text-muted-foreground" />
                              </button>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </ResizablePanel>

                    <ResizableHandle withHandle={true} />

                    {/* Right Sandbox Component Render Panel */}
                    <ResizablePanel defaultSize={70}>
                      <ScrollArea className="h-full">
                        <div className="space-y-8 p-6">
                          {/* Section 1: Dialogs & Overlays */}
                          <div className="space-y-4">
                            <h3 className="border-b pb-1.5 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                              Dialogs, Drawers & Sheets
                            </h3>
                            <div className="flex flex-wrap gap-3">
                              {/* Trigger Sheet (Trigger 3) */}
                              <Sheet>
                                <SheetTrigger
                                  render={
                                    <Button variant="outline" size="sm">
                                      <Sparkles className="mr-1.5 size-4" />{" "}
                                      Open Operations Sheet
                                    </Button>
                                  }
                                />
                                <SheetContent side="left" className="w-[400px]">
                                  <SheetHeader>
                                    <SheetTitle>
                                      Audit Logs Directory
                                    </SheetTitle>
                                    <SheetDescription>
                                      Inspect framework compilation statistics.
                                    </SheetDescription>
                                  </SheetHeader>
                                  <div className="space-y-4 py-4 text-sm">
                                    <div className="space-y-1">
                                      <span className="text-xs font-semibold text-muted-foreground">
                                        COMPILATION METRIC
                                      </span>
                                      <div className="flex justify-between border-b pb-1">
                                        <span>Bundle Size</span>
                                        <Badge>184.2 kB</Badge>
                                      </div>
                                      <div className="flex justify-between border-b pb-1">
                                        <span>Compilation Duration</span>
                                        <Badge variant="secondary">320ms</Badge>
                                      </div>
                                    </div>
                                    <div className="space-y-2 pt-2">
                                      <span className="text-xs font-semibold text-muted-foreground">
                                        SKELETON COMPONENT MOCKUP
                                      </span>
                                      <div className="space-y-2">
                                        <Skeleton className="h-4 w-3/4 rounded" />
                                        <Skeleton className="h-4 w-1/2 rounded" />
                                      </div>
                                    </div>
                                  </div>
                                  <SheetFooter>
                                    <Button
                                      onClick={() =>
                                        triggerToast("Scans logged.", "success")
                                      }
                                      className="w-full"
                                    >
                                      Log Scan Checklist
                                    </Button>
                                  </SheetFooter>
                                </SheetContent>
                              </Sheet>

                              {/* Alert Dialog Variant */}
                              <AlertDialog>
                                <AlertDialogTrigger
                                  render={
                                    <Button variant="destructive" size="sm">
                                      Trigger Destructive Action
                                    </Button>
                                  }
                                />
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle className="text-destructive">
                                      Critical Threat Vector Simulation
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Simulating a kernel clearance event inside
                                      virtual operations dashboard framework.
                                      This action cannot be revoked.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>
                                      Dismiss
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                      className="text-destructive-foreground bg-destructive hover:bg-destructive/90"
                                      onClick={() =>
                                        triggerToast(
                                          "Threat vector cleared.",
                                          "success"
                                        )
                                      }
                                    >
                                      Flush Session
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>

                              {/* Collapsible Sandbox */}
                              <Collapsible className="w-full max-w-xs rounded-lg border bg-muted/20 p-3">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-semibold">
                                    Diagnostic Output Drawer
                                  </span>
                                  <CollapsibleTrigger
                                    render={
                                      <Button variant="ghost" size="icon-xs">
                                        <ChevronDown className="size-3.5" />
                                      </Button>
                                    }
                                  />
                                </div>
                                <CollapsibleContent className="space-y-1.5 pt-2 text-xs text-muted-foreground">
                                  <div className="rounded border bg-muted p-2 font-mono leading-normal">
                                    [ok] build packages/ui successfully
                                    <br />
                                    [ok] oxlint scan passed (0 issues)
                                    <br />
                                    [info] server listen at
                                    http://localhost:5173
                                  </div>
                                </CollapsibleContent>
                              </Collapsible>
                            </div>
                          </div>

                          {/* Section 2: Buttons & Badges */}
                          <div className="space-y-4">
                            <h3 className="border-b pb-1.5 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                              Buttons, Badges & Toggles
                            </h3>
                            <div className="space-y-4">
                              <div className="flex flex-wrap items-center gap-3">
                                <Label className="w-24 text-xs font-medium">
                                  Button Size
                                </Label>
                                <ToggleGroup
                                  value={[sandboxButtonSize]}
                                  onValueChange={(val) => {
                                    if (val && val.length > 0)
                                      setSandboxButtonSize(
                                        val[0] as typeof sandboxButtonSize
                                      )
                                  }}
                                >
                                  <ToggleGroupItem value="xs">
                                    xs
                                  </ToggleGroupItem>
                                  <ToggleGroupItem value="sm">
                                    sm
                                  </ToggleGroupItem>
                                  <ToggleGroupItem value="default">
                                    default
                                  </ToggleGroupItem>
                                  <ToggleGroupItem value="lg">
                                    lg
                                  </ToggleGroupItem>
                                </ToggleGroup>
                              </div>

                              <div className="flex flex-wrap items-center gap-3">
                                <Label className="w-24 text-xs font-medium">
                                  Badge Variant
                                </Label>
                                <Select
                                  value={sandboxBadgeState}
                                  onValueChange={(val) =>
                                    setSandboxBadgeState(
                                      val as typeof sandboxBadgeState
                                    )
                                  }
                                >
                                  <SelectTrigger className="h-8 w-36">
                                    <SelectValue placeholder="Select variant" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="default">
                                      default
                                    </SelectItem>
                                    <SelectItem value="secondary">
                                      secondary
                                    </SelectItem>
                                    <SelectItem value="outline">
                                      outline
                                    </SelectItem>
                                    <SelectItem value="destructive">
                                      destructive
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <Badge
                                  variant={sandboxBadgeState}
                                  className="capitalize"
                                >
                                  {sandboxBadgeState} Status
                                </Badge>
                              </div>

                              <div className="flex flex-wrap items-center gap-3 pt-2">
                                <Button
                                  size={sandboxButtonSize}
                                  variant="default"
                                  onClick={() =>
                                    triggerToast(
                                      "Default Button Active",
                                      "success"
                                    )
                                  }
                                >
                                  Primary Button
                                </Button>
                                <Button
                                  size={sandboxButtonSize}
                                  variant="outline"
                                  onClick={() =>
                                    triggerToast(
                                      "Outline Button Active",
                                      "info"
                                    )
                                  }
                                >
                                  Outline Variant
                                </Button>
                                <Button
                                  size={sandboxButtonSize}
                                  variant="secondary"
                                  onClick={() =>
                                    triggerToast(
                                      "Secondary Button Active",
                                      "info"
                                    )
                                  }
                                >
                                  Secondary Variant
                                </Button>
                                <Button
                                  size={sandboxButtonSize}
                                  variant="destructive"
                                  onClick={() =>
                                    triggerToast(
                                      "Destructive Button Active",
                                      "error"
                                    )
                                  }
                                >
                                  Destructive Variant
                                </Button>
                              </div>
                            </div>
                          </div>

                          {/* Section 3: Indicators, Spinners & Toasts */}
                          <div className="space-y-4">
                            <h3 className="border-b pb-1.5 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                              Diagnostics, Loading & Toasts
                            </h3>
                            <div className="flex flex-wrap items-center gap-4">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setShowSandboxLoader(true)
                                  setTimeout(
                                    () => setShowSandboxLoader(false),
                                    2000
                                  )
                                }}
                              >
                                Trigger Simulated Compile Check (2s)
                              </Button>

                              <div className="flex items-center gap-3">
                                {showSandboxLoader ? (
                                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                                    <Spinner className="size-4 animate-spin text-primary" />
                                    <span>compiling modules...</span>
                                  </div>
                                ) : (
                                  <span className="font-mono text-xs text-muted-foreground">
                                    [Ready] Diagnostic Idle
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2.5 pt-2">
                              <Button
                                size="xs"
                                variant="outline"
                                onClick={() =>
                                  triggerToast(
                                    "All systems operational.",
                                    "success"
                                  )
                                }
                              >
                                Fire Success Toast
                              </Button>
                              <Button
                                size="xs"
                                variant="outline"
                                onClick={() =>
                                  triggerToast(
                                    "Server load peak warnings.",
                                    "warning"
                                  )
                                }
                              >
                                Fire Warning Toast
                              </Button>
                              <Button
                                size="xs"
                                variant="outline"
                                onClick={() =>
                                  triggerToast("Fulfillment cleared.", "info")
                                }
                              >
                                Fire Info Toast
                              </Button>
                              <Button
                                size="xs"
                                variant="outline"
                                onClick={() =>
                                  triggerToast(
                                    "Fatal clearing compile fail.",
                                    "error"
                                  )
                                }
                              >
                                Fire Error Toast
                              </Button>
                            </div>
                          </div>

                          {/* Section 4: Avatars & Tooltips */}
                          <div className="space-y-4">
                            <h3 className="border-b pb-1.5 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                              Avatars & Tooltips
                            </h3>
                            <div className="flex flex-wrap items-center gap-6">
                              <div className="space-y-1.5">
                                <Label className="text-xs text-muted-foreground">
                                  Avatar Group Checklist
                                </Label>
                                <AvatarGroup>
                                  <Avatar size="sm">
                                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=60" />
                                    <AvatarFallback>SP</AvatarFallback>
                                    <AvatarBadge className="bg-green-500" />
                                  </Avatar>
                                  <Avatar size="sm">
                                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=60" />
                                    <AvatarFallback>JD</AvatarFallback>
                                    <AvatarBadge className="bg-yellow-500" />
                                  </Avatar>
                                  <Avatar size="sm">
                                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=60" />
                                    <AvatarFallback>AM</AvatarFallback>
                                  </Avatar>
                                  <AvatarGroupCount>+3</AvatarGroupCount>
                                </AvatarGroup>
                              </div>

                              <div className="space-y-1.5">
                                <Label className="text-xs text-muted-foreground">
                                  Hover Tooltip Info
                                </Label>
                                <div className="flex items-center gap-1.5">
                                  <Tooltip>
                                    <TooltipTrigger
                                      render={
                                        <Button
                                          variant="ghost"
                                          size="icon-xs"
                                          className="rounded-full bg-muted/40"
                                        >
                                          <Info className="size-3.5" />
                                        </Button>
                                      }
                                    />
                                    <TooltipContent side="top">
                                      <span>
                                        Framework engine target config
                                      </span>
                                    </TooltipContent>
                                  </Tooltip>
                                  <span className="text-xs">
                                    Hover icon to see tooltip
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </div>
              )}
            </main>

            {/* Footer Status Indicators */}
            <footer className="flex flex-col items-center justify-between gap-2.5 border-t bg-muted/10 px-6 py-3 text-xs text-muted-foreground md:flex-row">
              <div className="flex items-center gap-1.5">
                <span className="size-2 animate-pulse rounded-full bg-green-500" />
                <span className="font-semibold text-foreground">
                  Operational Status: Healthy
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span>Vite Dev Environment Active</span>
                <span>Local component showcase</span>
              </div>
            </footer>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </DirectionProvider>
  )
}
