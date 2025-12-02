import Service from "./Service";

function Services() {
  return (
    <div className="container mx-auto p-4 pt-6">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <div className="flex flex-wrap justify-center">
        <Service title="Service 1" description="This is service 1" />
        <Service title="Service 2" description="This is service 2" />
        <Service title="Service 3" description="This is service 3" />
      </div>
    </div>
  );
}

export default Services;