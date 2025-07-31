const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix navbar issue",
        description: "Resolve sticky navbar bug on scroll.",
        date: "2025-07-31",
        category: "Bug",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
      },
      {
        title: "Write test cases",
        description: "Add unit tests for login module.",
        date: "2025-07-30",
        category: "Testing",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Redesign landing page",
        description: "Update UI based on new branding.",
        date: "2025-07-29",
        category: "Design",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
      },
      {
        title: "Database cleanup",
        description: "Remove deprecated fields from user table.",
        date: "2025-07-28",
        category: "Database",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
      },
      {
        title: "Fix API 500 error",
        description: "Check auth middleware on `/tasks` route.",
        date: "2025-07-30",
        category: "Backend",
        active: false,
        completed: false,
        failed: true,
        newTask: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Integrate Stripe",
        description: "Enable payment via Stripe gateway.",
        date: "2025-08-01",
        category: "Integration",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
      },
      {
        title: "Create error logs",
        description: "Implement logging for production errors.",
        date: "2025-07-30",
        category: "DevOps",
        active: false,
        completed: false,
        failed: true,
        newTask: false,
      },
      {
        title: "Fix broken links",
        description: "Audit site and fix broken internal URLs.",
        date: "2025-07-29",
        category: "Maintenance",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Implement dark mode",
        description: "Add dark mode toggle in settings.",
        date: "2025-07-31",
        category: "Frontend",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
      },
      {
        title: "Optimize images",
        description: "Compress homepage images for performance.",
        date: "2025-07-28",
        category: "Performance",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
      },
      {
        title: "Fix responsiveness",
        description: "Improve mobile layout of dashboard.",
        date: "2025-07-29",
        category: "Bug",
        active: false,
        completed: false,
        failed: true,
        newTask: false,
      },
      {
        title: "Update footer",
        description: "Add legal disclaimer in footer.",
        date: "2025-07-27",
        category: "Content",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Deploy staging build",
        description: "Push latest features to staging.",
        date: "2025-07-30",
        category: "Deployment",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
      },
      {
        title: "Add contact form validation",
        description: "Restrict invalid email and empty message.",
        date: "2025-07-31",
        category: "Validation",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
      },
    ],
  },
];
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
}

export const getLocalStorage = () => {
   const employees = JSON.parse(localStorage.getItem('employees'));
   const admin = JSON.parse(localStorage.getItem('admin'));
   console.log(employees, admin)
}