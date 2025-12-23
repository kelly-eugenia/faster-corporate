import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function JobDesc() {
  return (
    <>
      <NavBar />

      <div className="w-full mx-auto py-8">
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 pt-16 sm:pt-24 mx-auto">
          <header className="bg-bg-secondary rounded-2xl p-6 sm:p-12 lg:p-16 mb-12">
            <h1 className="my-6 md:my-8 text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-text-primary">
              Terms and Conditions
            </h1>
          </header>

          <section className="max-w-6xl mb-6 md:mb-12">
            Terms and Conditions
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}
