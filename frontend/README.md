src
│
├── components           # Reusable UI pieces
│     ├── Navbar.jsx
│     ├── PostCard.jsx
│     ├── Comment.jsx
│     ├── Avatar.jsx
│     └── Loader.jsx
│
├── pages                # Pages corresponding to routes
│     ├── Feed.jsx
│     ├── Login.jsx
│     ├── Register.jsx
│     ├── Profile.jsx
│     └── PostPage.jsx
│
├── layouts              # Layout components (wrappers)
│     ├── MainLayout.jsx      # For logged-in pages
│     └── AuthLayout.jsx      # For login/register pages
│
├── hooks                # Custom hooks
│     └── useAuth.js
│
├── services             # API communication
│     ├── authService.js
│     ├── postService.js
│     └── commentService.js
│
├── context              # Global state
│     └── AuthContext.jsx
│
├── guards               # Route guards
│     ├── AuthGuard.jsx
│     └── GuestGuard.jsx
│
├── utils                # Helper functions
│     └── helpers.js
│
├── data                 # Temporary mock data for frontend first
│     └── mockPosts.js
│
├── App.jsx              # Central router and entry point
└── main.jsx             # ReactDOM.render

next steps : 
    - understand the context , auth and the useContext , useAuth hooks