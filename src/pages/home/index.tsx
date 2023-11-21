export default function HomePage() {
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      id: i,
    });
  }

  return (
    <div>
      <h1>Home Page</h1>
      {data.map((_, i) => (
        <p key={i}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quo ratione placeat et atque temporibus dolorum
          eligendi tempore, quae delectus consequuntur, vel esse consectetur iste velit ea sunt odio repellat.
        </p>
      ))}
    </div>
  );
}
