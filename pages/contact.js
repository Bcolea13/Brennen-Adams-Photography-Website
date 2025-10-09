import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <>
      <NavBar />
      <main className="container">
        <h1>Contact</h1>
        <p>
          Email me at:{" "}
          <a href="mailto:hello@brennenadamsphotography.com">
            hello@brennenadamsphotography.com
          </a>
        </p>
      </main>
    </>
  );
}
