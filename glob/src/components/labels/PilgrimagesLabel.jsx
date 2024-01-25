import { useQuery } from "react-query";
import Spinner from "../Spinner";
import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";

const reqUrl =
  "http://localhost/wordpress/wp-json/wp/v2/trips?acf_format=standard&_fields=id,title,acf";

function PilgrimagesLabel() {
  const { isLoading, error, data } = useQuery("pilgrimages", async () => {
    const req = await fetch(reqUrl);
    const data = await req.json();
    return data.filter((trip) => trip.acf.kategorie.name === "Pielgrzymka");
  });

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (error) return <h1>Wystąpił błąd: {error.message}</h1>;
  if (!data) return null;
  return (
    <div className="d-flex w-75 flex-column justify-content-center gap-2 pt-3 content">
      <div className="d-flex flex-row w-100 gap-2">
        <Navigation />
      </div>

      <div className="d-flex flex-row flex-wrap gap-2">
        {data.map((trip) => (
          <div key={trip.id} className="">
            <Figure className="">
              <Link to={`/trip/${trip.id}`}>
                <Figure.Image
                  className=""
                  alt={trip.title.rendered}
                  src={trip.acf.large_image}
                />
              </Link>
              <Figure.Caption className="text-left ">
                <h5>{trip.title.rendered}</h5>
              </Figure.Caption>
            </Figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PilgrimagesLabel;
