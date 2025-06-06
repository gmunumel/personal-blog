// import Image from "next/image";

// const LoloPage = () => {
//   const images = Array.from({ length: 8 }, (_, i) => `/lolo_${i + 1}.jpg`);

//   return (
//     <main className="max-w-2xl mx-auto p-6">
//       <Image
//         src="/lolo_and_me.jpg"
//         alt="Photo of Lolo the chow chow"
//         width={256}
//         height={256}
//         className="mb-4 shadow rounded-lg"
//         priority
//       />
//       <h1 className="text-3xl font-bold mb-4">Lolo 🦁</h1>
//       <p className="mb-6 text-lg">
//         👋 Hi, I’m Lolo—a lion-like chow chow with a big appetite and an even
//         bigger heart. I live for long walks, tasty treats, and hanging out with
//         my favorite toy, Lala (yes, the yellow one from Teletubbies). I might
//         look regal and serious, but I’m really just a softie who loves snacks,
//         snuggles, and sniffing every corner of the park.
//       </p>
//       <div className="grid grid-cols-2 gap-4">
//         {images.map((src, idx) => (
//           <Image
//             key={src}
//             src={src}
//             alt={`Lolo picture ${idx + 1}`}
//             width={512}
//             height={512}
//             className="rounded-lg shadow object-cover w-full h-48"
//           />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default LoloPage;

"use client";
import Image from "next/image";

const LoloPage = () => {
  const images = Array.from({ length: 8 }, (_, i) => `/lolo_${i + 1}.jpg`);

  return (
    <main className="flex justify-center items-start min-h-[80vh] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <section className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/lolo_and_me.jpg"
            alt="Photo of Lolo the chow chow"
            width={512}
            height={512}
            className="lolo_and_me mb-4 shadow-lg rounded-xl border-4 border-blue-200 dark:border-blue-900 object-cover"
            priority
          />
          <h1 className="text-4xl font-extrabold mb-1 text-blue-800 dark:text-blue-200 text-center">
            Lolo 🦁
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-2">
            The lion-like chow chow
          </p>
        </div>
        <p className="mb-8 text-center text-gray-700 dark:text-gray-200 leading-relaxed">
          👋 Hi, I’m Lolo—a lion-like chow chow with a big appetite and an even
          bigger heart. I live for long walks, tasty treats, and hanging out
          with my favorite toy, Lala (yes, the yellow one from Teletubbies). I
          might look regal and serious, but I’m really just a softie who loves
          snacks, snuggles, and sniffing every corner of the park.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt={`Lolo picture ${idx + 1}`}
              width={512}
              height={512}
              className="rounded-xl shadow-md object-cover w-full h-48 border-2 border-blue-100 dark:border-blue-900"
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default LoloPage;
