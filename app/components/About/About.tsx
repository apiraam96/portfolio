import Image from "next/image";
import ProfilePicture from "../../../public/ApiraamProfile.jpg";

export default function About() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <h1>About me</h1>
        <div
          className="grid min-h-[70vh] items-center justify-between md:grid-cols-3"
          aria-label="Apiraam Selvabaskaran"
        >
          <Image
            className="md:col-span-2"
            alt="Profile picture"
            src={ProfilePicture}
            width={700}
            height={500}
          ></Image>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              magni provident eligendi, quam nihil voluptas? Nulla blanditiis
              quasi temporibus. Eaque, sunt. Dignissimos molestias tempora at
              commodi, vitae dolor et in, pariatur beatae animi excepturi
              laudantium ducimus laborum aspernatur doloremque corporis officia
              ab nisi, quo eum quae suscipit dolorem. Fugiat omnis eos
              perferendis dolorum quaerat, consequatur temporibus culpa
              asperiores neque laborum! In nemo deleniti nisi aliquid
              perspiciatis reprehenderit, nobis a ab. Possimus labore corrupti
              optio dolorem doloribus quibusdam aperiam fuga, repellendus ea
              porro, sit deleniti repellat vero! Eaque aperiam corporis
              dignissimos! Reprehenderit delectus voluptas incidunt quia ad
              repudiandae amet, ipsum libero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
