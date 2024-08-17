import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CartesianGrid, XAxis, Bar, BarChart } from "recharts";
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "./ui/chart";
import { ClassAttributes, HTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";

function DashboardView() {
  return (
    <div>
      <div className="flex-1 p-6 md:p-8 lg:p-10 xl:p-12  flex flex-col">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6 ">
          <Card className="bg-white text-black ">
            <CardContent className="h-[10rem] p-6">
              <div className="text-2xl font-bold">125</div>
              <div className="text-sm">Form Submissions</div>
            </CardContent>
          </Card>
          <Card className="bg-white text-black">
            <CardContent className="h-[10rem] p-6">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm">Conversion Rate</div>
            </CardContent>
          </Card>
          <Card className="bg-white text-black">
            <CardContent className="h-[10rem] p-6">
              <div className="text-2xl font-bold">$12,345</div>
              <div className="text-sm">Revenue Generated</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 flex-1">
          <Card className="bg-white text-black">
            <CardHeader>
              <CardTitle className="text-xl">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">New Lead</div>
                    <div className="text-sm text-muted-foreground">
                      John Doe signed up
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    2 hours ago
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">New Order</div>
                    <div className="text-sm text-muted-foreground">
                      Order #12345 placed
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">1 day ago</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">New Project</div>
                    <div className="text-sm text-muted-foreground">
                      Project Acme launched
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    3 days ago
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4">
            <Card className="bg-white text-black">
              <CardHeader>
                <CardTitle className="text-xl">Upcoming Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Design Review</div>
                      <div className="text-sm text-muted-foreground">
                        Review new website design
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Tomorrow
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Team Meeting</div>
                      <div className="text-sm text-muted-foreground">
                        Discuss project roadmap
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">Friday</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Client Call</div>
                      <div className="text-sm text-muted-foreground">
                        Follow up on proposal
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Next Monday
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="">
              <Card className=" text-black">
                <CardContent>
                  <BarchartChart className="aspect-[9/4]" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardView;

function BarchartChart(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
