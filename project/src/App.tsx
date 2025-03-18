import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/lib/theme';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Activity,
  Heart,
  Weight,
  Thermometer,
  Plus,
  Calendar,
  Clock,
  Trash2,
} from 'lucide-react';
import type { SymptomLog, MedicalRecord } from '@/lib/types';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="health-journal-theme">
      <Router>
        <div className="relative min-h-screen bg-background font-sans antialiased">
          <Header />
          <main className="container py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/symptoms" element={<Symptoms />} />
              <Route path="/records" element={<Records />} />
            </Routes>
          </main>
        </div>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Track Your Health Journey
      </h1>
      <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
        Your personal health companion. Record symptoms, track medical history, and
        take control of your well-being.
      </p>
      <div className="flex space-x-4">
        <Link to="/signin">
          <Button size="lg">Get Started</Button>
        </Link>
        <Link to="/about">
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <h1 className="text-3xl font-bold">About Health Journal</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Health Journal is your personal health tracking companion, designed to help
        you maintain a comprehensive record of your health journey. Our platform
        provides an intuitive way to log symptoms, track medical history, and
        manage your personal health records.
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Symptom tracking with severity levels</li>
            <li>Medical history management</li>
            <li>Secure data storage</li>
            <li>Dark mode support</li>
            <li>Responsive design</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Privacy & Security</h2>
          <p className="text-gray-500 dark:text-gray-400">
            We take your privacy seriously. All your health data is encrypted and
            stored securely. You have full control over your data and can export or
            delete it at any time.
          </p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Have questions or need support? We're here to help. Fill out the form
        below, and we'll get back to you as soon as possible.
      </p>
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="How can we help?"
            className="min-h-[150px]"
          />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}

function SignIn() {
  return (
    <div className="mx-auto max-w-sm space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Sign in to access your health journal
        </p>
      </div>
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  );
}

function Dashboard() {
  const healthMetrics = [
    {
      icon: Heart,
      label: 'Heart Rate',
      value: '72 bpm',
      change: '+2 from last week',
      color: 'text-red-500',
    },
    {
      icon: Weight,
      label: 'Weight',
      value: '68 kg',
      change: '-0.5 from last week',
      color: 'text-blue-500',
    },
    {
      icon: Thermometer,
      label: 'Temperature',
      value: '36.6°C',
      change: 'Normal',
      color: 'text-green-500',
    },
    {
      icon: Activity,
      label: 'Activity',
      value: '8,432 steps',
      change: '85% of daily goal',
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Measurement
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {healthMetrics.map((metric) => (
          <Card key={metric.label} className="p-6">
            <div className="flex items-center space-x-4">
              <metric.icon className={`h-8 w-8 ${metric.color}`} />
              <div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <h3 className="text-2xl font-bold">{metric.value}</h3>
                <p className="text-sm text-muted-foreground">{metric.change}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 text-xl font-semibold">Recent Symptoms</h3>
          <div className="space-y-4">
            {/* Placeholder for recent symptoms */}
            <p className="text-muted-foreground">No recent symptoms logged</p>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="mb-4 text-xl font-semibold">Upcoming Appointments</h3>
          <div className="space-y-4">
            {/* Placeholder for appointments */}
            <p className="text-muted-foreground">No upcoming appointments</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Symptoms() {
  const [symptoms, setSymptoms] = useState<SymptomLog[]>([
    {
      id: '1',
      userId: 'user1',
      date: '2024-03-20',
      symptoms: ['Headache', 'Fatigue'],
      severity: 'moderate',
      notes: 'Started in the morning, persisted throughout the day',
      createdAt: '2024-03-20T08:00:00Z',
    },
    {
      id: '2',
      userId: 'user1',
      date: '2024-03-19',
      symptoms: ['Fever', 'Cough'],
      severity: 'severe',
      notes: 'High temperature of 39°C, dry cough',
      createdAt: '2024-03-19T15:30:00Z',
    },
    {
      id: '3',
      userId: 'user1',
      date: '2024-03-18',
      symptoms: ['Nausea'],
      severity: 'mild',
      notes: 'Slight discomfort after meals',
      createdAt: '2024-03-18T20:15:00Z',
    },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Symptoms Tracker</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Log Symptoms
        </Button>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-end gap-4">
            <div className="flex-1 space-y-2">
              <Label>Symptoms</Label>
              <Input placeholder="Enter symptoms (e.g., headache, fever)" />
            </div>
            <div className="w-[200px] space-y-2">
              <Label>Severity</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mild">Mild</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="severe">Severe</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-[200px] space-y-2">
              <Label>Date</Label>
              <Input type="date" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Notes</Label>
            <Textarea placeholder="Add any additional notes or observations" />
          </div>
          <Button className="w-full">Save Symptom Log</Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4 text-xl font-semibold">Symptom History</h3>
        <div className="relative overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Symptoms</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Notes</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {symptoms.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.date}</TableCell>
                  <TableCell>{log.symptoms.join(', ')}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        log.severity === 'severe'
                          ? 'bg-red-100 text-red-800'
                          : log.severity === 'moderate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {log.severity}
                    </span>
                  </TableCell>
                  <TableCell>{log.notes}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}

function Records() {
  const [records, setRecords] = useState<MedicalRecord[]>([
    {
      id: '1',
      userId: 'user1',
      date: '2024-03-15',
      type: 'condition',
      title: 'Seasonal Allergies',
      description: 'Diagnosed with seasonal rhinitis. Prescribed antihistamines.',
      provider: 'Dr. Sarah Johnson',
      createdAt: '2024-03-15T14:30:00Z',
    },
    {
      id: '2',
      userId: 'user1',
      date: '2024-02-28',
      type: 'vaccination',
      title: 'Flu Vaccine',
      description: 'Annual influenza vaccination',
      provider: 'City Health Clinic',
      createdAt: '2024-02-28T10:15:00Z',
    },
    {
      id: '3',
      userId: 'user1',
      date: '2024-01-20',
      type: 'procedure',
      title: 'Dental Cleaning',
      description: 'Routine dental cleaning and check-up',
      provider: 'Dr. Michael Chen, DDS',
      createdAt: '2024-01-20T09:00:00Z',
    },
    {
      id: '4',
      userId: 'user1',
      date: '2024-01-10',
      type: 'medication',
      title: 'Vitamin D Supplement',
      description: 'Started daily vitamin D supplementation',
      provider: 'Dr. Emily Williams',
      createdAt: '2024-01-10T16:45:00Z',
    },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Medical Records</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Record
        </Button>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-end gap-4">
            <div className="w-[200px] space-y-2">
              <Label>Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="condition">Condition</SelectItem>
                  <SelectItem value="medication">Medication</SelectItem>
                  <SelectItem value="procedure">Procedure</SelectItem>
                  <SelectItem value="vaccination">Vaccination</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 space-y-2">
              <Label>Title</Label>
              <Input placeholder="Enter title" />
            </div>
            <div className="w-[200px] space-y-2">
              <Label>Date</Label>
              <Input type="date" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea placeholder="Add detailed information about the record" />
          </div>
          <div className="space-y-2">
            <Label>Healthcare Provider</Label>
            <Input placeholder="Enter healthcare provider's name" />
          </div>
          <Button className="w-full">Save Record</Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4 text-xl font-semibold">Record History</h3>
        <div className="relative overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        record.type === 'condition'
                          ? 'bg-blue-100 text-blue-800'
                          : record.type === 'medication'
                          ? 'bg-purple-100 text-purple-800'
                          : record.type === 'procedure'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {record.type}
                    </span>
                  </TableCell>
                  <TableCell>{record.title}</TableCell>
                  <TableCell>{record.provider}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}

export default App;