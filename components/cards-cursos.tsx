// import { database } from "@/database";
// import Image from "next/image";

// export default function CardsCursos() {
//     return (
//         <div className='flex justify-center my-5 mx-1'>
//             {database.categories.map((category) => (
//                 <div key={category.id}>
//                     {category.sections.map((sections) => (
//                         <div key={sections.id}>
//                             <div className="p-2 font-bold text-black dark:text-white">{sections.name}</div>
//                             <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
//                                 {sections.items.map((item) => (
//                                     <div key={item.name}>
//                                         <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg backdrop-blur-3xl drop-shadow-md" >
//                                             <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
//                                                 <Image src={item.image} alt={item.name} width={1280} height={720}/>
//                                                 <div
//                                                     className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
//                                                 </div>
//                                             </div>
//                                             <div className="p-6">
//                                                 <div className="flex items-center justify-between mb-3">
//                                                     <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black">
//                                                         {item.name}
//                                                     </h5>
//                                                     <p
//                                                         className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
//                                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
//                                                             className="-mt-0.5 h-5 w-5 text-yellow-700">
//                                                             <path fill-rule="evenodd"
//                                                                 d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
//                                                                 clip-rule="evenodd"></path>
//                                                         </svg>
//                                                         {item.rating}
//                                                     </p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-900">
//                                                         {item.description}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <div className="p-6 pt-3">
//                                                 <a
//                                                     href={item.href}
//                                                     className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                                                     type="button">
//                                                     Veja Mais
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     )
// }

