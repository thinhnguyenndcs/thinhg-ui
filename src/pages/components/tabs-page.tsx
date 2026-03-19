import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TabsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Tabs</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Update your account settings and preferences.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  After saving, you'll be logged out.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Multiple Tabs</h2>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="p-4">
            Overview content goes here.
          </TabsContent>
          <TabsContent value="analytics" className="p-4">
            Analytics content goes here.
          </TabsContent>
          <TabsContent value="reports" className="p-4">
            Reports content goes here.
          </TabsContent>
          <TabsContent value="notifications" className="p-4">
            Notifications content goes here.
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
