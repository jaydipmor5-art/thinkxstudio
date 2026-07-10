import { create } from "zustand";

export type Role = "client" | "employee" | "admin" | "super_admin";

export interface User {
  name: string;
  email: string;
  role: Role;
}

export interface Task {
  id: string;
  title: string;
  status: "todo" | "doing" | "done";
  assignee: string;
}

export interface Project {
  id: string;
  name: string;
  clientName: string;
  status: "planning" | "design" | "development" | "testing" | "deployed";
  budget: number;
  uiProgress: number;
  devProgress: number;
  testProgress: number;
  deployProgress: number;
  gitCommits: { sha: string; author: string; msg: string; date: string }[];
  tasks: Task[];
  invoices: { id: string; amount: number; status: "paid" | "unpaid"; date: string }[];
  files: { name: string; size: string; uploader: string; date: string }[];
  messages: { sender: string; role: string; content: string; date: string }[];
}

export interface Lead {
  id: string;
  clientName: string;
  company: string;
  scope: string;
  value: number;
  stage: "lead" | "assigned" | "followup" | "won";
  assignedTo: string;
}

export interface Applicant {
  id: string;
  name: string;
  email: string;
  role: string;
  resume: string;
  status: "applied" | "review" | "interview" | "offered" | "rejected";
}

interface PortalStore {
  user: User | null;
  setUser: (user: User | null) => void;
  projects: Project[];
  updateProjectProgress: (id: string, key: "uiProgress" | "devProgress" | "testProgress" | "deployProgress", val: number) => void;
  addGitCommit: (projectId: string, commit: { sha: string; author: string; msg: string; date: string }) => void;
  addTask: (projectId: string, task: Task) => void;
  updateTaskStatus: (projectId: string, taskId: string, status: "todo" | "doing" | "done") => void;
  addProjectMessage: (projectId: string, msg: { sender: string; role: string; content: string; date: string }) => void;
  leads: Lead[];
  addLead: (lead: Lead) => void;
  updateLeadStage: (id: string, stage: "lead" | "assigned" | "followup" | "won") => void;
  assignLead: (id: string, employee: string) => void;
  applicants: Applicant[];
  updateApplicantStatus: (id: string, status: "applied" | "review" | "interview" | "offered" | "rejected") => void;
}

export const usePortalStore = create<PortalStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),

  // Mock projects list
  projects: [
    {
      id: "proj-medx",
      name: "MedX Flow ERP",
      clientName: "CarePath Hospitals",
      status: "development",
      budget: 8500,
      uiProgress: 95,
      devProgress: 68,
      testProgress: 30,
      deployProgress: 10,
      gitCommits: [
        { sha: "b8f2c1a", author: "Snehal S.", msg: "feat: initialize real-time edge schema hooks", date: "Today, 11:20 AM" },
        { sha: "a1b2c3d", author: "Aarav P.", msg: "fix: resolve doctor route query latency", date: "Yesterday, 04:45 PM" },
        { sha: "e9f8d7c", author: "Snehal S.", msg: "style: add glassmorphic dashboard panel", date: "July 3, 2026" },
      ],
      tasks: [
        { id: "task-1", title: "Complete HIPAA Auth rules", status: "done", assignee: "Snehal S." },
        { id: "task-2", title: "Verify real-time Sync channels", status: "doing", assignee: "Aarav P." },
        { id: "task-3", title: "Staging sandbox deployment setup", status: "todo", assignee: "Snehal S." },
      ],
      invoices: [
        { id: "TX-INV-821", amount: 4250, status: "paid", date: "June 15, 2026" },
        { id: "TX-INV-904", amount: 4250, status: "unpaid", date: "July 1, 2026" },
      ],
      files: [
        { name: "MedX_Flow_Blueprint.pdf", size: "4.2 MB", uploader: "Snehal S.", date: "June 10, 2026" },
        { name: "Clinical_Dashboard_Figma.png", size: "12.8 MB", uploader: "Client", date: "June 12, 2026" },
      ],
      messages: [
        { sender: "Snehal S.", role: "Lead Dev", content: "Hi team, HIPAA schemas are successfully merged.", date: "Today, 11:22 AM" },
        { sender: "Client", role: "CarePath Rep", content: "Looks good. Can we add doctor availability slots tomorrow?", date: "Today, 11:35 AM" },
      ],
    },
  ],

  updateProjectProgress: (id, key, val) =>
    set((state) => ({
      projects: state.projects.map((p) => (p.id === id ? { ...p, [key]: val } : p)),
    })),

  addGitCommit: (projectId, commit) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId ? { ...p, gitCommits: [commit, ...p.gitCommits] } : p
      ),
    })),

  addTask: (projectId, task) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId ? { ...p, tasks: [...p.tasks, task] } : p
      ),
    })),

  updateTaskStatus: (projectId, taskId, status) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              tasks: p.tasks.map((t) => (t.id === taskId ? { ...t, status } : t)),
            }
          : p
      ),
    })),

  addProjectMessage: (projectId, msg) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId ? { ...p, messages: [...p.messages, msg] } : p
      ),
    })),

  // CRM Leads
  leads: [
    { id: "lead-1", clientName: "Rohan Patel", company: "Aura LED Lights", scope: "Interactive Quotation Studio", value: 6500, stage: "won", assignedTo: "Aarav P." },
    { id: "lead-2", clientName: "Kunal Sen", company: "SenEdu Systems", scope: "School Student Portal ERP", value: 12000, stage: "followup", assignedTo: "Snehal S." },
    { id: "lead-3", clientName: "Pooja Vyas", company: "LuxeSalon Hub", scope: "Booking & Calendly CRM integration", value: 3500, stage: "lead", assignedTo: "Unassigned" },
  ],

  addLead: (lead) => set((state) => ({ leads: [...state.leads, lead] })),
  
  updateLeadStage: (id, stage) =>
    set((state) => ({
      leads: state.leads.map((l) => (l.id === id ? { ...l, stage } : l)),
    })),

  assignLead: (id, employee) =>
    set((state) => ({
      leads: state.leads.map((l) => (l.id === id ? { ...l, assignedTo: employee } : l)),
    })),

  // Applicants for Careers
  applicants: [
    { id: "app-101", name: "Jayesh Parmar", email: "jayesh@example.com", role: "Senior AI Agent Developer", resume: "https://drive.google.com/jayesh_cv", status: "interview" },
    { id: "app-102", name: "Nisha Rao", email: "nisha@example.com", role: "Lead Frontend UI Architect", resume: "https://drive.google.com/nisha_cv", status: "review" },
  ],

  updateApplicantStatus: (id, status) =>
    set((state) => ({
      applicants: state.applicants.map((a) => (a.id === id ? { ...a, status } : a)),
    })),
}));
