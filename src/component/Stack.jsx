import Work from "./Work";

const stackData = [
  { name: "HTML", icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { name: "CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
  { name: "Bootstrap", icon: "https://mohit-portfolio.vercel.app/assets/bootstrap.8e546a2c.svg" },
  { name: "JavaScript", icon: "https://mohit-portfolio.vercel.app/assets/javascript.0656ff65.svg" },
  { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },

  { name: "Express", icon: "https://mohit-portfolio.vercel.app/assets/express.27ec7e3d.svg" },
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
  { name: "Postman", icon: "https://mohit-portfolio.vercel.app/assets/postman.893a78b8.png" },
  { name: "Git", icon: "https://mohit-portfolio.vercel.app/assets/git.717a57ea.svg" },
  { name: "Mongoose", icon: "https://mohit-portfolio.vercel.app/assets/mongoose.20aad1bc.png" },
  { name: "Next.js", icon: "https://images.seeklogo.com/logo-png/44/2/next-js-logo-png_seeklogo-449824.png" },
  { name: "GSAP", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUASnkyRvUnJRW94LrX7WDDB0aJB3k15O2A&s" },

  { name: "Docker", icon: "https://res.cloudinary.com/futurecoder/image/upload/v1758291655/qgfwx9ffmcggsqyu5ehc.svg" },
  { name: "Microsoft Clarity", icon: "https://res.cloudinary.com/futurecoder/image/upload/v1758291886/qupmd4r4bskrwzbptyws.png" },
  { name: "Firebase", icon: "https://res.cloudinary.com/futurecoder/image/upload/v1759157849/h83rmogl6dzxbqzvfmaf.png" },
  { name: "NextAuth", icon: "https://res.cloudinary.com/futurecoder/image/upload/v1765690318/f2khfjrlxhkuem0zx5k0.png" },
  { name: "Python", icon: "https://res.cloudinary.com/futurecoder/image/upload/v1766727146/nt8sudq4uikccgy0jlhj.png" }
];

export default function Stack() {
  return (
   <>
    <section className="stack-section" id="stack">
      <div className="stack-container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build modern products
        </p>

        <div className="stack-grid">
          {stackData.map((item) => (
            <div className="stack-card" key={item.name}>
              <img src={item.icon} alt={item.name} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Work/>
   </>
  );
}
