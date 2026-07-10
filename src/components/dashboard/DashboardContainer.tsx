"use client";

import React, { useState } from "react";
import { usePortalStore, Role } from "../../store/portalStore";
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  MessageSquare,
  Users,
  Settings,
  LogOut,
  Sparkles,
  CheckSquare,
  FileUp,
  Calendar,
  Send,
  Download,
  DollarSign,
  TrendingUp,
  Clock,
  Briefcase,
  Layers,
} from "lucide-react";

export default function DashboardContainer() {
  const { user, setUser, projects, updateProjectProgress, addGitCommit, addTask, updateTaskStatus, addProjectMessage, leads, updateLeadStage, assignLead, applicants, updateApplicantStatus } = usePortalStore();
  const [activeTab, setActiveTab] = useState<string>("overview");
  
  // States for client chat
  const [chatInput, setChatInput] = useState("");
  // States for blog CMS form
  const [blogTitle, setBlogTitle] = useState("");
  const [blogCat, setBlogCat] = useState("AI");
  
  // States for adding tasks
  const [newTaskTitle, setNewTaskTitle] = useState("");

  if (!user) return null;

  const handleLogout = () => {
    setUser(null);
  };

  const activeProject = projects[0]; // medx flow erp

  // Dynamic Sidebar options by Role
  const sidebarLinks = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={16} /> },
    { id: "projects", label: user.role === "client" ? "Live Workspace" : "Project Board", icon: <FolderKanban size={16} /> },
  ];

  if (user.role === "client") {
    sidebarLinks.push(
      { id: "invoices", label: "Invoices", icon: <FileText size={16} /> },
      { id: "files", label: "File Vault", icon: <FileUp size={16} /> },
      { id: "chat", label: "Team Chat", icon: <MessageSquare size={16} /> }
    );
  }

  if (user.role === "admin" || user.role === "super_admin") {
    sidebarLinks.push(
      { id: "crm", label: "CRM Leads", icon: <DollarSign size={16} /> },
      { id: "applicants", label: "Candidates", icon: <Users size={16} /> },
      { id: "cms", label: "Blog CMS", icon: <Layers size={16} /> }
    );
  }

  sidebarLinks.push({ id: "settings", label: "Settings", icon: <Settings size={16} /> });

  // Handle Client Chat message submit
  const handleChatSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    addProjectMessage(activeProject.id, {
      sender: user.name,
      role: user.role === "client" ? "Client" : "Team Member",
      content: chatInput.trim(),
      date: "Just now",
    });

    setChatInput("");

    // Simulate developer reply after 2 seconds
    if (user.role === "client") {
      setTimeout(() => {
        addProjectMessage(activeProject.id, {
          sender: "Snehal S.",
          role: "Lead Dev",
          content: "Acknowledged! Updating the Gantt timeline configurations now.",
          date: "Just now",
        });
        
        // Add a mock Git commit to the feed to simulate live activity
        addGitCommit(activeProject.id, {
          sha: "g6h7i8j",
          author: "Snehal S.",
          msg: "fix: update timeline schedule parameters from client request",
          date: "Just now",
        });
      }, 2000);
    }
  };

  // Handle adding task on Kanban
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    addTask(activeProject.id, {
      id: "task-" + Math.floor(1000 + Math.random() * 9000),
      title: newTaskTitle.trim(),
      status: "todo",
      assignee: user.name,
    });
    setNewTaskTitle("");
  };

  // Mock Invoice Downloader
  const handleDownloadInvoice = (invId: string, amount: number) => {
    const txtContent = `
============================================================
                     THINKXSTUDIO INVOICE
============================================================
Invoice ID: ${invId}
Date Generated: ${new Date().toLocaleDateString()}
Status: PAID
------------------------------------------------------------
Client Name: CarePath Hospitals
Project: MedX Flow ERP Implementation
Consulting services and custom UI/UX design: $${amount}
------------------------------------------------------------
TOTAL RECEIVED: $${amount}
============================================================
Thank you for partnering with ThinkXstudio!
============================================================
`;
    const blob = new Blob([txtContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${invId}_Paid_Receipt.txt`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex relative overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-zinc-900 bg-black/40 backdrop-blur-xl flex flex-col justify-between p-6">
        <div className="flex flex-col gap-8">
          {/* Logo heading */}
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="ThinkX OS Logo"
              className="h-6 w-auto object-contain invert hue-rotate-180"
            />
            <span className="text-[8px] font-black uppercase font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-accent-cyan">
              v2.0
            </span>
          </div>

          {/* User profile capsule */}
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-850 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center font-bold text-xs">
              {user.name.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <h4 className="text-xs font-bold text-zinc-200 truncate">{user.name}</h4>
              <p className="text-[9px] text-zinc-500 font-mono uppercase font-bold tracking-wider">{user.role}</p>
            </div>
          </div>

          {/* Links list */}
          <div className="flex flex-col gap-1.5">
            {sidebarLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  activeTab === link.id
                    ? "bg-gradient-brand text-white shadow shadow-accent-purple/10"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30"
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Logout node */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-bold text-rose-500 hover:text-rose-400 hover:bg-rose-500/5 transition-all border border-transparent hover:border-rose-500/10"
        >
          <LogOut size={16} />
          <span>Exit Workspace</span>
        </button>
      </aside>

      {/* Main Content Workspace */}
      <main className="flex-grow p-8 overflow-y-auto max-h-screen">
        
        {/* Tab 1: Overview Dashboard */}
        {activeTab === "overview" && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-300">
            {/* Greeting Header */}
            <div>
              <h2 className="text-2xl font-black text-white">System Overview</h2>
              <p className="text-xs text-zinc-500 mt-1">
                Real-time active sync indices across client projects and team leads.
              </p>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-5 glassmorphism rounded-2xl border border-zinc-800">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">
                  Active Projects
                </span>
                <div className="text-3xl font-black text-white font-mono">
                  {projects.length}
                </div>
              </div>
              <div className="p-5 glassmorphism rounded-2xl border border-zinc-800">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">
                  Total Budget Allocation
                </span>
                <div className="text-3xl font-black text-accent-cyan font-mono">
                  ${projects.reduce((sum, p) => sum + p.budget, 0)}
                </div>
              </div>
              <div className="p-5 glassmorphism rounded-2xl border border-zinc-800">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">
                  Active CRM Pipeline
                </span>
                <div className="text-3xl font-black text-accent-purple font-mono">
                  {leads.length} Leads
                </div>
              </div>
              <div className="p-5 glassmorphism rounded-2xl border border-zinc-800">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">
                  Recruitment Applicants
                </span>
                <div className="text-3xl font-black text-accent-magenta font-mono">
                  {applicants.length} CVs
                </div>
              </div>
            </div>

            {/* Analytics Section (SVG Area Chart) */}
            <div className="p-6 glassmorphism rounded-2xl border border-zinc-800">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-1.5">
                <TrendingUp size={16} className="text-accent-cyan" />
                ThinkX OS Network Sync Traffic (Revenue Trend)
              </h3>
              
              {/* Gorgeous SVG Chart representation */}
              <div className="w-full h-48 bg-zinc-950/60 rounded-xl relative overflow-hidden flex items-end p-2 border border-zinc-900/60">
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Fill Area gradient */}
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Area fill path */}
                  <path
                    d="M 0 90 Q 20 60, 40 75 T 80 40 T 100 20 L 100 100 L 0 100 Z"
                    fill="url(#chartGrad)"
                  />
                  {/* Line path */}
                  <path
                    d="M 0 90 Q 20 60, 40 75 T 80 40 T 100 20"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="1.5"
                  />
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </svg>

                {/* Legend logs overlay */}
                <div className="absolute right-4 top-4 text-[9px] font-mono text-zinc-500 uppercase flex gap-4">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-accent-cyan" /> Visitors</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-accent-purple" /> Sales</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Live Project Workspace (Client Portal) */}
        {activeTab === "projects" && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-black text-white">{user.role === "client" ? "Live Project Workspace" : "Active Development Hub"}</h2>
              <p className="text-xs text-zinc-500 mt-1">
                {activeProject.name} — sync metrics showing active coding status.
              </p>
            </div>

            {/* Gauges Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* UI Progress */}
              <div className="p-5 glassmorphism rounded-2xl border border-zinc-800 text-center">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-4">UI/UX Design</span>
                <div className="w-20 h-20 rounded-full border-4 border-accent-cyan flex items-center justify-center text-sm font-bold font-mono text-accent-cyan bg-accent-cyan/5 mx-auto relative">
                  {activeProject.uiProgress}%
                </div>
                {user.role === "admin" && (
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={activeProject.uiProgress}
                    onChange={(e) => updateProjectProgress(activeProject.id, "uiProgress", parseInt(e.target.value))}
                    className="w-full mt-4 accent-accent-cyan"
                  />
                )}
              </div>

              {/* Dev Progress */}
              <div className="p-5 glassmorphism rounded-2xl border border-zinc-800 text-center">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-4">Coding Dev</span>
                <div className="w-20 h-20 rounded-full border-4 border-accent-purple flex items-center justify-center text-sm font-bold font-mono text-accent-purple bg-accent-purple/5 mx-auto relative">
                  {activeProject.devProgress}%
                </div>
                {user.role === "admin" && (
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={activeProject.devProgress}
                    onChange={(e) => updateProjectProgress(activeProject.id, "devProgress", parseInt(e.target.value))}
                    className="w-full mt-4 accent-accent-purple"
                  />
                )}
              </div>

              {/* QA / Testing */}
              <div className="p-5 glassmorphism rounded-2xl border border-zinc-800 text-center">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-4">QA & QA Logs</span>
                <div className="w-20 h-20 rounded-full border-4 border-accent-magenta flex items-center justify-center text-sm font-bold font-mono text-accent-magenta bg-accent-magenta/5 mx-auto relative">
                  {activeProject.testProgress}%
                </div>
                {user.role === "admin" && (
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={activeProject.testProgress}
                    onChange={(e) => updateProjectProgress(activeProject.id, "testProgress", parseInt(e.target.value))}
                    className="w-full mt-4 accent-accent-magenta"
                  />
                )}
              </div>

              {/* Deployment */}
              <div className="p-5 glassmorphism rounded-2xl border border-zinc-800 text-center">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-4">Deploy Status</span>
                <div className="w-20 h-20 rounded-full border-4 border-emerald-400 flex items-center justify-center text-sm font-bold font-mono text-emerald-400 bg-emerald-500/5 mx-auto relative">
                  {activeProject.deployProgress}%
                </div>
                {user.role === "admin" && (
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={activeProject.deployProgress}
                    onChange={(e) => updateProjectProgress(activeProject.id, "deployProgress", parseInt(e.target.value))}
                    className="w-full mt-4 accent-emerald-500"
                  />
                )}
              </div>
            </div>

            {/* Kanban tasks & Git timeline logs side-by-side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Task board */}
              <div className="col-span-1 lg:col-span-6 glassmorphism rounded-2xl p-6 border border-zinc-800">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-1.5">
                  <CheckSquare size={16} className="text-accent-cyan" />
                  Gantt Task Checklist Board
                </h3>

                {/* Add task form */}
                <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
                  <input
                    type="text"
                    required
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Create new checklist items..."
                    className="flex-grow bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-2.5 text-xs text-zinc-200 outline-none focus:border-accent-cyan font-medium placeholder:text-zinc-500"
                  />
                  <button type="submit" className="px-4 py-2.5 rounded-xl bg-gradient-brand text-xs font-bold text-white">
                    Add
                  </button>
                </form>

                <div className="flex flex-col gap-3">
                  {activeProject.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-900 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={task.status === "done"}
                          onChange={() =>
                            updateTaskStatus(
                              activeProject.id,
                              task.id,
                              task.status === "done" ? "todo" : "done"
                            )
                          }
                          className="accent-accent-cyan rounded"
                        />
                        <span className={`text-xs ${task.status === "done" ? "line-through text-zinc-500" : "text-zinc-300"}`}>
                          {task.title}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-850">
                        {task.assignee}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Git commit log timeline */}
              <div className="col-span-1 lg:col-span-6 glassmorphism rounded-2xl p-6 border border-zinc-800">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-1.5">
                  <Clock size={16} className="text-accent-purple" />
                  Live Git Commit Activity (Staging Deploy Logs)
                </h3>

                <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-2">
                  {activeProject.gitCommits.map((commit, cIdx) => (
                    <div key={commit.sha} className="flex gap-4 items-start text-xs border-b border-zinc-900 pb-3 last:border-0 last:pb-0">
                      <div className="font-mono text-[10px] text-accent-cyan font-bold bg-accent-cyan/5 px-2 py-0.5 rounded border border-accent-cyan/15">
                        {commit.sha}
                      </div>
                      <div className="overflow-hidden">
                        <p className="font-bold text-zinc-200 leading-snug">{commit.msg}</p>
                        <p className="text-[10px] text-zinc-500 font-mono mt-1 font-semibold">
                          By {commit.author} • {commit.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Invoices */}
        {activeTab === "invoices" && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-black text-white">Client Invoice Logs</h2>
              <p className="text-xs text-zinc-500 mt-1">Download paid receipts and check pending transaction amounts.</p>
            </div>

            <div className="glassmorphism rounded-2xl border border-zinc-800 overflow-hidden">
              <div className="grid grid-cols-4 gap-2 bg-zinc-900 p-4 text-[10px] font-black text-zinc-500 uppercase tracking-wider font-mono">
                <span>Invoice ID</span>
                <span>Issuing Date</span>
                <span>Status</span>
                <span className="text-right">Action</span>
              </div>
              
              {activeProject.invoices.map((inv) => (
                <div key={inv.id} className="grid grid-cols-4 gap-2 p-4 border-b border-zinc-900 text-xs font-semibold items-center">
                  <span className="font-mono text-zinc-200">{inv.id}</span>
                  <span className="text-zinc-500">{inv.date}</span>
                  <div>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase font-mono border ${
                      inv.status === "paid"
                        ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
                        : "bg-amber-500/5 text-amber-400 border-amber-500/20"
                    }`}>
                      {inv.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={() => handleDownloadInvoice(inv.id, inv.amount)}
                      className="inline-flex items-center gap-1 text-xs text-accent-cyan hover:underline"
                    >
                      <Download size={12} />
                      <span>Download Receipt</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: File Vault */}
        {activeTab === "files" && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-black text-white">Document & Asset Vault</h2>
              <p className="text-xs text-zinc-500 mt-1">Upload wireframes, design briefs, or database spreadsheets.</p>
            </div>

            <div className="p-8 border border-dashed border-zinc-800 rounded-2xl text-center bg-zinc-950/20">
              <FileUp size={36} className="mx-auto text-zinc-650 mb-3 animate-bounce" />
              <h4 className="text-xs font-bold text-zinc-350 mb-1">Drag file assets to drop</h4>
              <p className="text-[10px] text-zinc-500 font-mono mb-4">Supported formats: PDF, PNG, JPG, ZIP (Max size: 50MB)</p>
              <button className="px-5 py-2 rounded-xl bg-gradient-brand text-[10px] font-black uppercase tracking-wider text-white">
                Choose Local File
              </button>
            </div>

            <div className="glassmorphism rounded-2xl border border-zinc-800 overflow-hidden">
              <div className="grid grid-cols-4 gap-2 bg-zinc-900 p-4 text-[10px] font-black text-zinc-500 uppercase tracking-wider font-mono">
                <span>Asset name</span>
                <span>Size</span>
                <span>Uploaded By</span>
                <span className="text-right">Date</span>
              </div>
              
              {activeProject.files.map((file) => (
                <div key={file.name} className="grid grid-cols-4 gap-2 p-4 border-b border-zinc-900 text-xs font-semibold items-center">
                  <span className="text-zinc-200 truncate">{file.name}</span>
                  <span className="text-zinc-500 font-mono">{file.size}</span>
                  <span className="text-zinc-400">{file.uploader}</span>
                  <span className="text-right text-zinc-500 font-mono">{file.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Team Chat workspace */}
        {activeTab === "chat" && (
          <div className="flex flex-col h-[85vh] justify-between gap-6 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-black text-white">Team Chat Workspace</h2>
              <p className="text-xs text-zinc-500 mt-1">Direct encrypted communications channel with your lead developer.</p>
            </div>

            {/* Chat screen */}
            <div className="flex-grow glassmorphism rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between overflow-hidden">
              <div className="flex-grow overflow-y-auto flex flex-col gap-4 pr-2 mb-4">
                {activeProject.messages.map((m, idx) => (
                  <div key={idx} className={`max-w-[75%] ${m.sender === user.name ? "ml-auto" : "mr-auto"}`}>
                    <div className="flex items-center gap-2 mb-1.5 text-[9px] font-bold text-zinc-500">
                      <span>{m.sender}</span>
                      <span>({m.role})</span>
                      <span>•</span>
                      <span>{m.date}</span>
                    </div>
                    <div className={`p-3.5 rounded-2xl text-xs leading-relaxed font-semibold ${
                      m.sender === user.name
                        ? "bg-accent-purple/25 border border-accent-purple/40 text-white rounded-tr-none"
                        : "bg-zinc-900 border border-zinc-850 text-zinc-300 rounded-tl-none"
                    }`}>
                      {m.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input form */}
              <form onSubmit={handleChatSend} className="flex gap-3 bg-zinc-950 p-2.5 rounded-xl border border-zinc-900">
                <input
                  type="text"
                  required
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type updates or instructions..."
                  className="flex-grow bg-transparent border-0 outline-none text-xs text-zinc-300 px-3 placeholder:text-zinc-650"
                />
                <button type="submit" className="w-10 h-10 rounded-lg bg-gradient-brand text-white flex items-center justify-center hover:opacity-90">
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Tab 6: Admin CRM Leads */}
        {activeTab === "crm" && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-black text-white">CRM Leads Management</h2>
              <p className="text-xs text-zinc-500 mt-1">Track and manage inbound strategy proposals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {(["lead", "assigned", "followup", "won"] as const).map((stage) => (
                <div key={stage} className="p-5 glassmorphism rounded-2xl border border-zinc-900 flex flex-col gap-4 min-h-[350px]">
                  <h4 className="text-[10px] font-black text-white uppercase tracking-widest border-b border-zinc-900 pb-2 flex items-center justify-between">
                    <span>{stage} stage</span>
                    <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-500">
                      {leads.filter((l) => l.stage === stage).length}
                    </span>
                  </h4>

                  <div className="flex flex-col gap-3">
                    {leads
                      .filter((l) => l.stage === stage)
                      .map((lead) => (
                        <div key={lead.id} className="p-4 bg-zinc-950 border border-zinc-850 rounded-xl flex flex-col gap-3">
                          <div>
                            <h5 className="text-xs font-bold text-zinc-200">{lead.clientName}</h5>
                            <p className="text-[9px] text-zinc-500 font-medium">{lead.company} • {lead.scope}</p>
                          </div>
                          
                          <div className="flex justify-between items-center text-[10px] border-t border-zinc-900/60 pt-2 font-semibold">
                            <span className="font-mono text-accent-cyan">${lead.value}</span>
                            <span className="text-zinc-500 font-mono">{lead.assignedTo}</span>
                          </div>

                          {/* Quick stage toggle buttons */}
                          <div className="flex gap-1 mt-1 border-t border-zinc-900/60 pt-2">
                            {stage !== "won" && (
                              <button
                                onClick={() => {
                                  const stages: ("lead" | "assigned" | "followup" | "won")[] = ["lead", "assigned", "followup", "won"];
                                  const nextIdx = stages.indexOf(stage) + 1;
                                  updateLeadStage(lead.id, stages[nextIdx]);
                                }}
                                className="w-full text-center py-1 rounded bg-zinc-900 border border-zinc-800 text-[8px] font-bold uppercase text-zinc-400 hover:text-white"
                              >
                                Advance &rarr;
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 7: Recruiter Candidates Tracker */}
        {activeTab === "applicants" && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-black text-white">Talent Acquisition Board</h2>
              <p className="text-xs text-zinc-500 mt-1">Audit resumes and updates technical interview stages.</p>
            </div>

            <div className="glassmorphism rounded-2xl border border-zinc-800 overflow-hidden">
              <div className="grid grid-cols-5 gap-2 bg-zinc-900 p-4 text-[10px] font-black text-zinc-500 uppercase tracking-wider font-mono">
                <span>Candidate name</span>
                <span>Target Vacancy</span>
                <span>CV File</span>
                <span>Stage Status</span>
                <span className="text-right">Actions</span>
              </div>
              
              {applicants.map((app) => (
                <div key={app.id} className="grid grid-cols-5 gap-2 p-4 border-b border-zinc-900 text-xs font-semibold items-center">
                  <span className="text-zinc-200">{app.name}</span>
                  <span className="text-zinc-400">{app.role}</span>
                  <a href={app.resume} className="text-accent-cyan hover:underline text-[10px] truncate max-w-[120px]">{app.resume}</a>
                  <div>
                    <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase font-mono bg-zinc-900 border border-zinc-800 text-accent-purple">
                      {app.status}
                    </span>
                  </div>
                  <div className="text-right flex gap-1.5 justify-end">
                    <button
                      onClick={() => updateApplicantStatus(app.id, "interview")}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[8px] font-black uppercase text-accent-cyan hover:text-white"
                    >
                      Invite
                    </button>
                    <button
                      onClick={() => updateApplicantStatus(app.id, "offered")}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[8px] font-black uppercase text-emerald-400 hover:text-white"
                    >
                      Hire
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 8: Blog CMS */}
        {activeTab === "cms" && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-black text-white">Blog CMS Portal</h2>
              <p className="text-xs text-zinc-500 mt-1">Publish news, startups articles, and update categories.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Creator Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Blog post draft added! Staged for Supabase CDN deployment.");
                  setBlogTitle("");
                }}
                className="col-span-1 lg:col-span-5 glassmorphism rounded-2xl p-6 border border-zinc-800 flex flex-col gap-4"
              >
                <h4 className="text-xs font-black text-white uppercase tracking-widest mb-2 flex items-center gap-1">
                  <Briefcase size={14} className="text-accent-cyan" />
                  <span>Draft New Post</span>
                </h4>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                    Post Heading
                  </label>
                  <input
                    type="text"
                    required
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    placeholder="E.g., Automating B2B Lead Follow-ups..."
                    className="w-full bg-zinc-950 border border-zinc-900 rounded-xl py-3 px-4 text-xs outline-none focus:border-accent-cyan text-zinc-200 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                    Category Tag
                  </label>
                  <select
                    value={blogCat}
                    onChange={(e) => setBlogCat(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-900 rounded-xl py-3 px-4 text-xs outline-none focus:border-accent-cyan text-zinc-200 font-medium"
                  >
                    <option value="AI">AI & Agents</option>
                    <option value="Startup">Startups & Capital</option>
                    <option value="Marketing">Growth Marketing</option>
                    <option value="Development">Code Development</option>
                    <option value="SEO">SEO Optimization</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-brand text-xs font-bold tracking-widest uppercase text-white"
                >
                  Publish Draft
                </button>
              </form>

              {/* Status listings */}
              <div className="col-span-1 lg:col-span-7 glassmorphism rounded-2xl p-6 border border-zinc-800">
                <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">
                  Active Blogs CMS Logs
                </h4>
                <div className="flex flex-col gap-3">
                  <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-900 flex justify-between items-center text-xs">
                    <span className="font-semibold text-zinc-200">How Next.js 15 & React 19 Accelerate ERPs</span>
                    <span className="text-[10px] font-bold text-accent-cyan">Published</span>
                  </div>
                  <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-900 flex justify-between items-center text-xs">
                    <span className="font-semibold text-zinc-200">RAG Caching: Caching Knowledge Bases</span>
                    <span className="text-[10px] font-bold text-accent-cyan">Published</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 9: Settings */}
        {activeTab === "settings" && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-black text-white">Portal Settings</h2>
              <p className="text-xs text-zinc-500 mt-1">Configure database connections and security keys.</p>
            </div>

            <div className="max-w-xl glassmorphism rounded-2xl border border-zinc-800 p-6 flex flex-col gap-6">
              <h4 className="text-xs font-black text-white uppercase tracking-widest border-b border-zinc-900 pb-2">
                ThinkX OS Security Configuration
              </h4>
              
              <div className="flex flex-col gap-4 text-xs font-medium">
                <div className="flex justify-between items-center">
                  <span>Supabase RLS status:</span>
                  <span className="text-emerald-500 font-mono">Enforced (Active)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Helmet headers:</span>
                  <span className="text-emerald-500 font-mono">Secured (Active)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Zustand caching:</span>
                  <span className="text-emerald-500 font-mono">Enabled</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Rate limiting threshold:</span>
                  <span className="text-zinc-400 font-mono">100 req/min</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
