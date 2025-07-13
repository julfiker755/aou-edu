"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info, LinkIcon, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSec() {
    return (
        <div className="max-w-7xl mx-auto py-10">
            <div className="flex justify-between p-3 w-11/12 lg:w-full items-center">
                <h1 className="text-2xl font-bold flex items-center">
                    Grades <LinkIcon className="h-5 w-5 ml-2 text-gray-500" />
                </h1>
                <div className="text-sm text-muted-foreground flex items-center space-x-1">
                    {[
                        { label: "Home", href: "#" },
                        { label: "Grades", href: "#" },
                        { label: "Grades Online", href: null }
                    ].map((item, idx, arr) => (
                        <span key={item.label} className="flex items-center">
                            {item.href ? (
                                <Link href={item.href} className="text-primary">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="font-semibold text-primary">{item.label}</span>
                            )}
                            {idx < arr.length - 1 && <span className="mx-1">{">"}</span>}
                        </span>
                    ))}
                </div>
            </div>
            <Card className="p-6 rounded-lg space-y-2 shadow-none">
                <div className="flex items-end space-x-4 mb-3">
                    <div className="flex flex-wrap  items-center space-y-3 lg:space-y-0 lg:space-x-3">
                        <div>
                            <label htmlFor="academic-year" className="text-base font-medium mb-1">
                                Academic Year/Semester <span className="text-red-500">*</span>
                            </label>
                        </div>
                        <Select defaultValue="second-2023-2024">
                            <SelectTrigger id="academic-year" className="w-[200px]">
                                <SelectValue placeholder="Select semester" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="second-2023-2024">Second 2023/2024</SelectItem>
                                <SelectItem value="first-2023-2024">First 2023/2024</SelectItem>
                                <SelectItem value="summer-2023-2024">Summer 2023/2024</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button className="bg-[#002060] hover:bg-[#002060] text-white px-6 py-2">View Grades</Button>
                </div>

                 <div>
                 <div className="border border-gray-300 rounded-md overflow-hidden">
                    <Table className="w-full">
                        <TableHeader className="bg-gray-100 h-[60px]">
                            <TableRow className="border-b border-gray-300 ">
                                <TableHead className="w-[120px] text-black font-semibold border-r border-gray-300">
                                    Course Code <ArrowUpDown className="inline-block h-4 w-4 ml-1" />
                                </TableHead>
                                <TableHead className="w-[100px] text-black font-semibold border-r border-gray-300">
                                    Credit Hours <ArrowUpDown className="inline-block h-4 w-4 ml-1" />
                                </TableHead>
                                <TableHead className="w-[80px] text-black font-semibold border-r border-gray-300">
                                    Grade <ArrowUpDown className="inline-block h-4 w-4 ml-1" />
                                </TableHead>
                                <TableHead className="text-black font-semibold border-r border-gray-300">
                                    Grade Details
                                </TableHead>
                                <TableHead className="w-[150px] text-black font-semibold">
                                    Notes
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow className="bg-white border-b border-gray-300 hover:bg-[#6db1e2] hover:text-white">
                                <TableCell className="font-medium border-r border-gray-300">GR118</TableCell>
                                <TableCell className="border-r border-gray-300">3</TableCell>
                                <TableCell className="border-r border-gray-300">C</TableCell>
                                <TableCell className="border-r border-gray-300">
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        <li>TMA 01 (7/20)</li>
                                        <li>Mid Term Assessment (19/30)</li>
                                        <li>Final Exam (32/50)</li>
                                    </ul>
                                </TableCell>
                                <TableCell>---</TableCell>
                            </TableRow>

                            <TableRow className="bg-white border-b border-gray-300 hover:bg-[#6db1e2] hover:text-white">
                                <TableCell className="font-medium border-r border-gray-300">B392</TableCell>
                                <TableCell className="border-r border-gray-300">8</TableCell>
                                <TableCell className="border-r border-gray-300">B</TableCell>
                                <TableCell className="border-r border-gray-300">
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        <li>Attendance Participation (5/5)</li>
                                        <li>TMA 01 (12/15)</li>
                                        <li>Mid Term Assessment (19/30)</li>
                                        <li>Final Exam (38.5/50)</li>
                                    </ul>
                                </TableCell>
                                <TableCell>---</TableCell>
                            </TableRow>

                            <TableRow className="bg-white border-b border-gray-300 hover:bg-[#6db1e2] hover:text-white">
                                <TableCell className="font-medium border-r border-gray-300">BAS400</TableCell>
                                <TableCell className="border-r border-gray-300">4</TableCell>
                                <TableCell className="border-r border-gray-300">A</TableCell>
                                <TableCell className="border-r border-gray-300">
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        <li>Presentation (20/20)</li>
                                        <li>Field supervisor evaluation (50/50)</li>
                                        <li>Final Report (26.4/30)</li>
                                    </ul>
                                </TableCell>
                                <TableCell>---</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>


                </div>

                <div className="text-sm text-muted-foreground mt-3">3 Records - Showing 1 to 3</div>
                 </div>
              
                {/* Info Alert */}
                <Alert className="bg-blue-50 border-blue-200 text-blue-800">
                    <AlertDescription className="gap-2 flex items-center">
                        <Info size={30} className="text-blue-600" />
                        <p>
                            Please note that no credits are displayed for Part I courses
                            <br />
                            To view the GPA points value legend for the letter grades  {" "}
                            <span href="#" className="text-blue-600 underline">
                                Click here
                            </span>
                        </p>
                    </AlertDescription>
                </Alert>
            </Card>
        </div>
    )
}
