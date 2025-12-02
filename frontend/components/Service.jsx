function Service({ title, description }) {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
}

export default Service;