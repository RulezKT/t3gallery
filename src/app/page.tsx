import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/749cde09-ad4f-4083-8b9d-de13a99c065b-17rrps.jpg",
  "https://utfs.io/f/80507aac-bae7-4e12-8b97-af89e7e14717-cz6716.jpg",
  "https://utfs.io/f/3f0b544c-2a14-47b9-a12a-2564f393ac61-hwir6j.jpg",
  "https://utfs.io/f/32d744a6-a45a-410b-bc8b-157c3d1ebee7-sqoljd.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className=" ">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progres)
    </main>
  );
}
