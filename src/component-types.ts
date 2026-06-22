import type * as React from "react"

import type { AlertDialogContent } from "./shadcn/components/ui/alert-dialog.js"
import type { Button } from "./shadcn/components/ui/button.js"
import type { Calendar } from "./shadcn/components/ui/calendar.js"
import type { ChartContainer } from "./shadcn/components/ui/chart.js"
import type { Checkbox } from "./shadcn/components/ui/checkbox.js"
import type {
  ComboboxContent,
  ComboboxInput,
} from "./shadcn/components/ui/combobox.js"
import type { Command, CommandDialog } from "./shadcn/components/ui/command.js"
import type { DialogContent } from "./shadcn/components/ui/dialog.js"
import type { DrawerContent } from "./shadcn/components/ui/drawer.js"
import type { Input } from "./shadcn/components/ui/input.js"
import type {
  SelectContent,
  SelectTrigger,
} from "./shadcn/components/ui/select.js"
import type { SheetContent } from "./shadcn/components/ui/sheet.js"
import type {
  Sidebar,
  SidebarProvider,
} from "./shadcn/components/ui/sidebar.js"
import type { Slider } from "./shadcn/components/ui/slider.js"
import type { Switch } from "./shadcn/components/ui/switch.js"
import type { Tabs } from "./shadcn/components/ui/tabs.js"
import type { Textarea } from "./shadcn/components/ui/textarea.js"
import type { Toaster } from "./shadcn/components/ui/sonner.js"

export type AlertDialogContentProps = React.ComponentProps<
  typeof AlertDialogContent
>
export type ButtonProps = React.ComponentProps<typeof Button>
export type CalendarProps = React.ComponentProps<typeof Calendar>
export type ChartContainerProps = React.ComponentProps<typeof ChartContainer>
export type CheckboxProps = React.ComponentProps<typeof Checkbox>
export type ComboboxContentProps = React.ComponentProps<typeof ComboboxContent>
export type ComboboxInputProps = React.ComponentProps<typeof ComboboxInput>
export type CommandProps = React.ComponentProps<typeof Command>
export type CommandDialogProps = React.ComponentProps<typeof CommandDialog>
export type DialogContentProps = React.ComponentProps<typeof DialogContent>
export type DrawerContentProps = React.ComponentProps<typeof DrawerContent>
export type InputProps = React.ComponentProps<typeof Input>
export type SelectContentProps = React.ComponentProps<typeof SelectContent>
export type SelectTriggerProps = React.ComponentProps<typeof SelectTrigger>
export type SheetContentProps = React.ComponentProps<typeof SheetContent>
export type SidebarProps = React.ComponentProps<typeof Sidebar>
export type SidebarProviderProps = React.ComponentProps<typeof SidebarProvider>
export type SliderProps = React.ComponentProps<typeof Slider>
export type SwitchProps = React.ComponentProps<typeof Switch>
export type TabsProps = React.ComponentProps<typeof Tabs>
export type TextareaProps = React.ComponentProps<typeof Textarea>
export type ToasterProps = React.ComponentProps<typeof Toaster>
