import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  useParams,
} from "react-router-dom";
import http from "./http-common";

export const Headera = () => {
  return (
    <Router>
      <header className="text-gray-100 body-font bg-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-red-400 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-red-400 font-mono">Histo</span>
          </a>
          <nav className="md:ml-auto md:mr-auto  flex flex-wrap items-center text-xl cursor-pointer  justify-center font-mono">
            <NavItem linkTo="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Fandraisana
            </NavItem>
            <NavItem linkTo="/tantara">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Tantara
            </NavItem>
            <NavItem linkTo="/izahay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Izahay
            </NavItem>
            <NavItem linkTo="/deta">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                />
              </svg>
              Detail
            </NavItem>
          </nav>
        </div>
      </header>

      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/tantara" component={Tantara} />
        <Route exact path="/izahay" component={Izahay} />
        <Route exact path="/deta/:id" component={Deta} />
      </Switch>
    </Router>
  );
};

export const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center border-red-600">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="Sainam-pirenena Malagasy"
            src="https://cdn.britannica.com/46/2246-004-17A6E838/Flag-Madagascar.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Madagasikara
            <br className="hidden lg:inline-block" />
            tanindrazanay malala
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex  justify-center">
            <Link
              to="/tantara"
              className="inline-flex transition duration-300 ease-in-out animate-bounce text-white bg-pink-500 border-0 py-4 rounded-full px-10 focus:outline-none hover:bg-pink-600  text-2xl"
            >
              Hijery tantara
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Tantara = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  const isSearched = (searchTerm) => (data) =>
    !searchTerm || data.name.toLowerCase().includes(searchTerm.toLowerCase());

  const onSearchChange = (e) => {
    setsearchTerm(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await http.get("/presidents");
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <div className="my-8 flex justify-center ">
        <input
          className="h-10  rounded-lg p-4  ring-4 placeholder-opacity-40 ring-red-400 focus:outline-none  placeholder-red-400"
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Tadiaviko eto anaran'i Prez"
        />
      </div>
      <section className="flex items-center justify-center p-10">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
          {data.filter(isSearched(searchTerm)).map((president) => {
            return (
              <div className="flex flex-col bg-green-200 rounded-lg p-4 m-2">
                <img
                  className="object-cover object-center rounded-lg h-40 "
                  alt="Sainam-pirenena Malagasy"
                  src={president.portrait}
                />
                <div className="flex flex-col items-start mt-4">
                  <h4 className="text-xl font-semibold">{president.name}</h4>
                  <p className="text-sm">
                    Some text about the thing that goes over a few lines.
                  </p>
                  <Link
                    className="p-2 leading-none rounded-full text-white font-medium mt-3 bg-red-400 text-xs uppercase"
                    to={`/deta/${president.id}`}
                  >
                    Jerena
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-400 body-font">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-red-400 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Histo</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2021 FosaTeam —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @fosateam
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export const Izahay = () => {
  return (
    <>
      <div className="max-w-md px-8 py-4 mx-auto mt-16 mb-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-red-400 rounded-full dark:border-indigo-400"
            alt="Testimonial avatar"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYYGBgaGRgZHBoaGhkcGRkaGRgZGhgYHBgcIS4lHCErIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISGjQkJCE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAD8QAAEDAgQDBQYFAgUDBQAAAAEAAhEDIQQSMUEFUWETInGBkQYyQqGx8BRScsHRYuEVIzOS8UOisgdTc4KT/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQEBAQEBAAIDAAAAAAAAARECITESQVFxAyJh/9oADAMBAAIRAxEAPwAXAYoiHDVaXBcXa8RN91haOIgwiw8g5m2K5rNbytfiX7jRL6WJl0IXB4/N3XalGCiB3gl8V9GsBJTWhTSyg9MKNSUqa2tQkLG+0vB5BIFwt4y4QmMwwcCCnKmzXxxstMHUK5tVO/abhGUl7Rf6rLCqtGd8Me0XCogW1FYHpYRrhsUW7pth+JwsuyoiG1UsPW4wnGGndOcNjgd18ybW6pjg+JuaReUvyr9PpzKwIUajwsthOOgi6MbxIFTitNsy8cqaNQHdWPfZGk9BUrIcPVzLqv0MRfTBQtXBNOyOc1QTlhE1bhLTsgncH5BaZdlCLNTjKu4cQh34Vy176QKHfhAVF5LGV7A8ly034ALxL8njG43AxdUsfCe4mCFnsTSIK0Wtc4i4TTAcTzWdqk7ASFcyhFwiwNZRerOI8ZpYZjXVJLne5TGpH5zybPqgeE1g4ZSsX7Z4kvxVQEktYQxo0gMAGnjJ81Mnq807xH/qFVPuBjB+kfOSb+B9Efw727DrVgDp/ptII5nXvD0/n5tT8UXTouAzRDecc08ivz4+t1gzEMzscHNI/wCQRqD0K+ee0PCSwl7RabwpcA44cPUBv2ZkPaJIP9Q2kfQ9FvsThGVWZmw5rhII0IO6cuMuuXyAPIVrKqf432ZqOqltNhIN50A8T5o/Cewb9atQDowSfUq91GVlm1VMVVs2ew1IES6o7zaJ+S8xfsfQy2c9h55sw82lGBkG1la2ujsT7KVW+5Upv8y0+hEfNLsRwyuz3mGOYhw9WlGEKpYpNcFi+qyzahCvZio3Sw9b3DcRtBKtfxWN1haOLe45Wgk9FoMHhDRZ2+IAJ+CmT7x5vA2HJTZJ9VNvxo6FckB73NYw3BeYkcw0XI6xCNocQokhorsLjpqB/u0Hmvm/E8c57y9+YnTXbkef3ZLTiyDLXFpG4s4dQZlRPWn4uPtLnZbOsVW94WV9mOMmrh3seSXUQHtfcywmCCSSVeeMDYp4i+eU+L1zXpGzio3RFDiLSdU/R4cAr0FAsxIO68firo0jHMFyA/FL1GhmgJEhRqUw4dUt4PxQPbBN01LJuFRldWkQZCuoA+SOFPMOqHczKUgm0Ftws97WUSMQ550qMY8RPxNhw/3NctTSghB8dwbX4Z73uDTROZpMmQ8gFhgc4IO0lBy4+fBpLg0NLjOgME+a0dPBVGNzOa2CPceQ47fC1025kJDQxQY8PuYuMpiT48lo8L7S9o0sOYHYMLnPd0J2/bkE+pf5DnW+UkqOLX5XDKCesSPvdbT2T4pXyPpMIzgZ2B1w4CzmNv73u9LkLK1yXOIdmBINiQcoAkgXvbb6ovg2Lawh2eIIMQZOUwDz0vI5JWbBra4D2mdUJZUaAYJECIteeSM/xeIyti4HO9vXUeqFHB2VahrUq1JmdkvaXZYdEPIiYBsbxdypxGCfScMxa61yDpBu24vcm/Q9Iytz4uZTP8dIvrA+wqMa/M22v3bqklXHhru4ZJnSRFnRBItYdeaNw1SBnf3nQSNY/pAHK/yV8dX+l1zJ8RGaHCJj5bmD5qVKm17CcxDgbxy5gbg29CvK9c3IMEi1+cAfLZJ6OKMnLAIBBBm4jUCLHX02T69+DkbUpiCHsYZDgCQCHTYd7UFJavDGNGdrHOaPevdpHTca36JzTx7XlzHyJ+F1wRJJywLe7rfyVVOt2RIPeY83tJaTNi42g9VH6sP8yhfZdna1MrRlYLmBoBqVb7UYpz6jWMbfKLZtG7COfNaP2eo4VlM1GPdezmECxl0wBeDPyWfx1JnbufksbtcS7TbLaLDbVH26V88AYnhpFIOaxwdE6EyBqJiD6rMMk6rbcR466kA1hY9jm3sYHQtmR4j0WYY11V8NZBcQA1sm52E3Vc/Npzr+Gvs5W7OniXkC7GsE83u/gFQ/GDmh+N1WsLcPTPdpwX3BDqsQ8yNQPdHmgWytJGHV2mwxfVTGMPNJZK7tCniWko8RcPiRTeIu5rKMxCLpYpLD1pP8TcuSH8UvUYC/syx0hanhOMztAJS2rRaefyVGGd2b9THgP5Spzxqi0gyuq0swXuGeHttdEUW7JKKmvylVe0OZ2BrZb9+lP6c/8wj8bhTKjhDEtcAWuBa4HQg6hGnj5ni2BvdEmNT/ABdMuCYptMyGkzr3G6czcnKD6nnCO9pOCupuzjvMebHkeRQRw2Rga0nM65BJI6Wb9Y/lVbMKS6jiMQXudle5umrZBvYe8S4TtpupU8A5jhmDXOs6BYxckhhMi9piLaKynVawCwDnWg6eZggjxjbxXjnzAImCXgQ0CYttbTnslp5/6twGKcx4fTga3LTDToHTuZ5/3TKrxIuMvPeMEmLgHKS0CQIMDSNEpZWtmfckEmLECQb7kWFyj8JRLhmmTLQCSLcidm6HTntdT1NVzRNNxJuIMHmQYAc4f+Xp0ROGxBJDie6Mt4ne997D5hRo0MzQXEgXBEDu2yggcpmRM2Omiv7G2V0ai+oJvmIA0vlEfVSpz6+Z7GkiLtnpGvQ3I8kHxXDFrs4tMDwPImOiOGAc2LD3p8gARt1Bk/yuxDczI6ga+W/gfVEopa54e1pcBOsk3kAXB5yGjzKi7FOZ73ebPr3RqOdwpU2fBuAY0npAPl8tlXRwxzhpkiQCfAiROkR96JWeiUTh8S5gL6Zy5rXjQGY8JaNNpvdWuxDqzcpcM7RmBcSXXO0GR0A6ec8NhjYEatAtpP8AeZnSyW4mk5jsw7sZTDTqZkCIkwL+YRILhZxxlVryaswfP902xLxhsNRfRk1MQwkvd71NukMAs0mfeuUzdRGIY0mAYIeHHuZYPeJ6c7JBxzGZ3NYwnJTY1jOZDRGbpPS615uxl358K2UuZjx19NUZTLORd5gD0AP1QLev35q1lXyVsxpg/AB4F/1JI+SrdTb1HjB+gC8ZUVoeEgEfThQAKNcAodkNT/ymA+YrldHRvouSB9lVdWhmCLFNWMpKVp8DcR3SnTu6ZSmizKQQnjKeZqmqj0gOCX4lha4ZRMmI5qdJ5a6CmWHotJzuiG89JSNTxjDMGGFJ4aXO70GDDrxCxVOgC3uOE8473mIPpBH1TD2s4jmfDXafIg2KT0cPleS4AscAbgkCdbAifBAghmDcSA4BrPfHdyl7pEOu2bkbRElRxNPJmtBJJzTbNuJBEc9BorqnEQ6xZLbSb3Hn9NIC9p4NrojeDe4toSJtb8p/hVhaCwPDi85ozCSSW3Jna5E8tv51PDuAw7QhuU3DrgmbOkNnTUepQGFhpGYAGQCW5oPImHX9BotMeLUqbe+9s7TGbxnMl1cVzNRfw3KIhrSB170zvuJcSBtMjkMzxGv2bwRN7HSDa2mh0v0CbP8AbigDDnA7aAiPCD9dkg41xSjUcxzC0tuDrF5gEHTlvCmffirDMYsEamCATYX0tfeICGzXuRYF1ryATIgWB7piefVAjHtMbiDBF9oA30uembpBtJ0kxIvcSTrPLSfGUsMDWqAPBnSAZn0iORN7/JMcKQJO5AExpO8DWZ359EHiMNY6Xgm2hOwOpiQEVTaSJIiTfo3l5RPW/NOzwpRuJe1pzSDFoiw94xGk2b6+r/hfC2VqN4k7xpmvHlb0WLGNbcOENIc09ZO5Pg0x+ye+zPH2Uw8OeGhtwTtIExe/Ifcr5BfVeN4S+iXsdZhBg3u0D4j5FZmpho2W8xPHKOJaWseCW+7OpMXKQVcL0V81HfLJ4iiULotLiMIlOIwJ10HM2H91pKysBMer21FQ5oG5PyVtmaiXflO36uv9PryLJe10XPkOfXwXGqqHVSdY9B9VCUYBXaLkJnXIwN61iuZRP5T6FWCeZXoCzaImmRqCEwwVYRCGY47EjwJVjHuBkn1AP1SpxZjMPPeC9fUyUxzMn7CLZUDhBA8rfvCz/tNjGMhjnvZb8gI8CQZjyKRs1xlxc+0XPPXnPKUw4y0CmGzFgJOwA5wkhYxzoa+m++gqPY70qsaPSU14qwvA7r3R+RzTbrAv4SEWexUz0owOFE66E3uNf6gfvqtFw+iIHcbPwm946jX7lKcK1rWuJOXSz2ET4RmJCIw9UgkwCOTHEmDF8guPMKrqJDHG4QuYcoBMnkdNzFj9ddFkMfhKxBe7KGiBrzMWHmFtziyaeZsg8pINtdd+pSzEtY+Q8mHwHZmnM0tPdJbMkXOmliBYBHHW3KrvnOdjPcN4PTfm7fEGkA0kOLczS7YESIHnukuLoupvLcweMxAcJh0Gzr8+q11ThLwC0tzN/M1wcwidyD3NpzRE6lAYngFeo7K1kNAkuJETyB38lp+rPLGf532VRwmtoD6nSeSf1A10FrpaCCTrEW36iFHBeyrGt/zH5pAiW5TG/wBdyrKnBgyPiZ/S6+o+GfpuFj1ZvjbmX8+xNtPOBJJAtfb1uRcW6qnDvGUtzE6wLa/f7KFCm8gBr5EfFMiBMdCb+i8/w+o29oN519D96qpNiL5QeOYBSL8wJuDGoMyNelknFJj2jM9+chxyhoDWwQG3J78zfSOq0FbBh7cnxOIuNIvc/fNLG0Xtfk7Ml7ZEy0Nvo7MTonzb/C7k/vhh7JYF4rQYAjNPMHRa40ZMQkHCXFj2AguJIaIjQbnlckrT1nXPKdt/5St/7YM/6yga2HaL2cf+0fylOMwpdc/f8LQBs/dv7ofEUZTSxmKoZfd97824/Ty8dfBKiIWwxeFlIsXhITlKwtDl6SvHsIUZVpSlcoyuQH00FSlVyuBWTRc1ysDSd1VTuiWoDzDNh0X9Ssz7bE52w7KIjUz6BarNAJ5CVifaGrnveZM7jyRBCOniYN8zupyj9j9U4x7pAsLtmCJvvvbZJaViNLbphXq5mtubDfVF+q5+BPxwAgsB6h1QeneIHovRVpnUFojYh3lByoXEjz5odlQhXE0/4dxfszHamNhUa4keESE6ZxOm/wB/K4dHAecGCPOPNYSqZCtwGIJOUd48gMx9ErxL6fPdnlb9j2A9ykDF5gEj9I1Ntxb0SupxipUcW4cQ1h7zgQA13MSIzevrdJ3iuT7rqYG5bk+bolXs4i/3HOzg7l0uB5h7TJ8JI6JTn/Kuv+T+RdiWsaQXio8ukkucSQ6YJgGBML1zARmYXgXtJt1jr97rnMztylpmN95Gt/DVeYegQDAgiJLr26mYBttf9l0XLuJVoAIfcmLWloFpCLw3GHNa0Q0tggC0+I31lC0uEvqGwmLSDadxeNJCd0vZtzYkDTrr4pzm34d65n0up48ZnDKO8BHiJkeJReGbnyveGlxJbEXkWDRvcDTx5q2v7OPIOVpJHeAveFVhabnNex4gOETluCCADB3nmpssuf5VLLNn8WtYDUa1gLd3G1hvp4wnLWc/T+UHw2lANrzEnpbb3jryR2U8/TT+fmiTJ9R1f1XZVFwCllHj43+q9KaQlagClWKwcp4VTVpymGOxeC6JPXolq3GJw6RY3C9E5U2M7K9R/wCDXKtTjb516HofMpMBdoCVm0HYd6JDkBTAHvOHg259dEdh3yYa3zNz/HyQHmLY403BrSSbWBJ+Sx+Jwr7te+mzeHVGT/sBL/ktvxr/AES2ZtpP7L5ziWan1SViNShSA71UE8qdN7v/ADyBeMq0gImq8+DGD/yeq3sJ91ttzNh4uNh5qNPAuIzC7dMxIYydI7V8NJ6CSqwOfVpaFj//ANW/tTCHr1Gi4osjm59Un1a9o+SPZQZEglw0zMhjJmI/EVhGbo1ngu7drSAwBz3Hutpsc57uUVKoLmn9LBOyc8KwLRNVwD2UqbWfnLKYZrH+pWkeWaUWylUfJdiajmzBFEPc0cw5z3Mpt8iV1RoBL6haHiO7/r17aB76hLKZ6gZh+VQo169ZxbSDmwIc/OS9rT+eu67RY91uUG8NKrU2CKmFZRhpYxrpnJUeatTp/lUQxg599xCspnNADXOJbnHcpU2gHR5YxpMf1FxHU3VOHbTpuayi3t6rrAgRTBue6D72klxMR3gWwpvxAcXMDwWth9SoPczadybvvYOPeceQkuNGCaYnQDM3UyDHSRYf32TjhmHGWHAS4hsjckwJJtqQJBKRYclmWG94AOI0AnmekXnc9Aj8VxH/AC3ZHNEOzADN7zTMAwJM5teZ1Okf1V+CPZrH9kwdqcpc57iDq2XGB5ABbKpxNgaHBwIgbr5JxdrqxNVjwMxlzTYNMCSDymbLqfEHMblzEgLbcY5r6hR421+hCpruY9zyyJADj1+E+Gy+cUOIuAiU19ksU/tnl5N2PEf0wRJ6yWqO7s/0rny+NXhmENEG14EQAJtG6sOfYtI8CCPmQfkh8NBbmBIkui1tegt9EU0mL/29Qsf00xFrzoSPAjKfUEyvcw3kH6+BmF67S+irmxBumSZA5+v2VW4Ha/hr6aqOY6cvpzVL3Jh7UAKWYqgjzUnX138+ahUE6oBJ+GXJp2S5PQrFRo/q+Q9N1LtybE25Cw9FX2Kk2mghFNyccOAykzCT02pvRbZoHLX+UuvIrmbXnE6g7N0weZOyybqAILy3K3UZhraxbTBl1ry4taU54ljQzMB3nfmI7ojkDv1Py1Wf/FkmahJDjOXd3Vx1A+Z6aqIuqHVibsaA0GBUqw4A8msjI2Y91rHOHNC4yuJkTVfp2lXvx0awktAv8WboGq/FsdVd3C0NaLuJhjGk6T8I6ASToCdaW4sMtSkH/wB0iHutHcH/AE2+HeO5Elq0iUa9PIc2JqOz7MHeqxqAc1qLb6O7w/IQhqnESWlrAKbCCHBpOd4/rqHvO8LN/pCpbhXPcWtF4LiSQGtaNXucbNaJ1PPmUZhqjKLe0ZJIlvaXa577SyiDem0SJqEZriMpMKpE7iWG4c2mM+JJYPhpj33HW4+Acwb88stJpxFerXeyhTblYT3abbNF5LnH4tJLjynVBuxDqjwTdxgADTo1o2F/nzRvE6vYtNFkZ3CKzwb/APwtPIfFzNtAZJPR18eYjGNptdRonMCIq1RrU5sZypyB+qBNl5hiAW0ye4wmpW/qc0e55CGAfmcUBgrOza5dJ3dtb5+StAyscPie6T+hugneXTP6AqRyNxOLPvOgOqS93hmIazwAaD5jkry99iJJjUAEwLb9QUpxju+OjQzzY0M+cT5pjUx7fwzGNPfkh2tgHGL8zb5qLFyhMTTgnY6mNL9EKATZMKeLeSKYuDBMgHQREnwCaez3DG1C4vYSJI5eYJTvWT0vzvhDSoGRcJ7wqc0NJzOi4/LN97DWU4b7OML3DMWgCQNT6/eqacM4WxmZrBcxrqTex/2/9yi9fpU5xZQlsNMdCBExq1wFptt/zcwXkWO42M/eq8Y3YzGh57Fp8YjzAVjmW68/3U2DXkwY+z/K4heu28B/C9hVCUOCg5iJLF7kTALs172aMFNSFNABdmuRvZrkgDdhl5+HTEtUS1MgTKChWxBbDYG0gG8/umACzPFq8veRsfBLqbFc/XnG8RyOZ/I3AHUaJCxocC57oaD3nauc43yt/M75CZMWlhRfnaS8iBYDdx5D5SdvQFPj3EuvFrADQDXKB9ybm6XP+FdL34oGGZQ1guGCTc/E53xO6+kCygcJILyclNti6JJOuVjZ779LSALEkC6hRY1rQ+pMH3WCzn7WPwskQXdCBJkt6rinP97QCzQIawTOVrdh8zqZJJNf6THj6of3BLKTYc4AguIb8bzbO+8DQAugASSVuKrZzMZQAGtaLhrRMNB31JJ3JJ1KLxBytyDc5ndSJyjyBPm48gh8NSzOuCWi5AsXXAa0HYucQ2dpJ2Tg6G4L/Ipmt/1Xy2lzaI71TocrhH6mm4JhUTLYRXEMRneTMhoygjQgEkkDYFxcQNgQNkGnSc10aDS6Z4l4cZHw9w+LbT0BufNAsPeaZHvAR0Jv0U2Vy0kgSHah26pnLle4ll3bXP1VbWSQjnUQ8AgwI36beKqZSi8aJNJPdFPBZboIi+3Pmn3Ag5jIOpuYga9eaSYKqXODG3E3EwmdTEADuxP09Vn/AMl/i+funeBrtLnEyI5mZTTC1r5mm1tfP+yzfC36zvutBwuIcLG+myz+KhjUpgm24+/r8lFrJHX7kKVB3eA0+/7ot9O6ueo6gDKuyq6qwyYVOfZNKQaphqi16tagPMq8IU4XhCAguUoXIBe7EKJxCVduq3V+qrEadMr6+Cx+Nec7i82359AOv8HkmZrEzfYrPVXkmxNpjz38f4Sv1fPxJ+KcHTYCIDdABy+fzV1VjWgOeJdqGHQTcOf00IbqdTA96gwzcOftNww8/wCp3TQdT7o2cyQb3J6kk3JO6LFSq6ryXF7iSSZk77DysABsAAuY7fzj6KyqxUZCEtPEajvVSnKABYgZz+sjKwf/AFDs3iXLwQTfQXPUDb9lS9xMzeTJ+/NOJqsMUCFfsq3NT0Y9wzJPhdSyzbU6KWGflcDH7I17SxzarAC096NS07z06pzpNjT8G4E+nTBqARUyuANy0HWeUghV4nhgzlkwCYkBdS9smF4zMJZlggmCCeUbK6v7UUDJFK9okki20GITltnqubI7AeyLxDmPZ3rHMbASCCABPP8AlKq7CKr6YIdke5uYAQ7KYJE3hE1faOoGQ1oY506atadC3lbdB4B2W9vPUeKy9v0Tw4wtM9I8EfgH5HRsUpwzyJ+Q5+CZsAIDwR1CitIdANkEH18kwpOzDVLcM4OH3ZG0RlseaYxazqoVcJNwvX2vopsf1VSleQD2ltivWVExc1rrFLsXgnNu24VM7LFnaru0Ss4mLFR/FJYWm3aLko/GLk8BAXqBqKOQrzskIWNfr4FInvIMgwnTmHKfBJ+zt13Q05RYR4lWMo6qsCCj8MLGRvZK1WBhSLbHRQxIE20TGq2/e5XSysYlR9rSfAdQqhzlbVVOW60kZdV6HLwuVhbCgQEy2olyvw+Kc3TTkqZUC5AM2vpEAubBvp9fkvadak0y1pcZ+LT0SwklE0maFGDwc95e8vM3Ai+kDTwVzHSdYQxcraFxpP1SA5lQaOMkJjg8QcvmkzgNhZGYZnUhRWkanDVO7MeiZ4XEg91K+HuOUZh52VvaBrtY8UlHTxYgjwQtKpFkVhqgeNdEJWMEyLJgQHq5lcIHMIXtIjXVNNR4rw7OMzNVl6uZpg2K2basBBcR4c2oJaO8nKjrn/DK5iuRn+EvXKk5UBQC9OHR7WQp5QUiwpq0O6bbFZxtOx1iVt30ZB8FmW4UkOGgBMk+Km3F8wBTZO2isY8z81NzIPgvAdeSm1pIk9584S2u5FVOaDqO2S5V18C1FRF0S9qHc1bRj1EzTURTUy+B1XrSEEgaaiGK6IXNS08VsZdEsavGN16fup029UaMehv3y6IinY/uosZaRzuEWaQnN4WRpoz1uraVQg9Pmqyy3VQwwk6wpw2s4fUEWdtuovrAGdTuEowr4tqUb25IOkBRZlXPYd8Mrt2t0TKrTzWWSwuKhwmb9bLTCvIBBt0T+CerGsixVNQwbSj3gOAcFRVp2kJylYqok7H1RFOoZQlB0kghXsaeoVEIXKnsz+ZeJDSxoKsYxetVrCrrGIGms9jGlr3Bu5Oui06zeLqgF8iYco6Xz9LqsHbRDOmbCytxFdp0MfRAPrX1WbbmJ1HgoJ9ivTXg2Q76u6rmYfWY5zolUOcue9UuetZHP1V8SpMCHFRWNJKKItlSaVBoXoU1cWNciKDJ8kKERSedIndMqPDZBFh9D4olpMXAi0/yELhsxaQI5318EYwZQ2bjpt0KQDlpuJB5KLacayCiwyCZH8eKqxMcgOuyA8oVSD05q1jyQ7pzVVGZ/jmrHPuY5Qpqp8RpEzc2Wn4biJZlJssix0EzZNOHV4Mao6hxs+F4mW5W3RVNhBIckPCsUG36p2+u1xBuolyqsCVyWO2ur6dXMIKq4i0EA7KNBjSLFaSoxfPVeKvsxzXJ6WAFY1cuVMljVmsd71T9S5co6+L5+s7iPeQb91y5S2nxF+gQ7tFy5VC6UHVQcuXLWOevAjKei5cinz9XN0Xi5cs2sefwicJ7y5cmVGYbUeI+qbYbR3gvFyX9TVTtPNDYrTyXLkGhQ1HiEwf7y5cpv1ULsR75RvD9fJerlV+Dn6fcO28U/r6NXi5Zf1oqxvuBD09Fy5Wl4uXLkE//2Q=="
          />
        </div>

        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
          Fosa Team
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-200">
          Izahay dia avy amin'ny faritra Menabe. Nosafidiana io anaram-biby Fosa
          io satria mahiratra sy kinga ary tena mpihaza mahay tokoa. Efa holany
          tamingana izy io, ary izany no mahatonga anay miezaka miaro azy.
          Izahay dia telo mirahalahy no mivondrona ao.
        </p>

        <div className="flex justify-end mt-4">
          <p className="text-xl font-medium text-red-400 dark:text-indigo-300">
            Misaotra
          </p>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ linkTo, children }) => {
  return (
    <NavLink
      exact
      to={linkTo}
      className="mr-5 inline-flex items-center hover:text-red-400 py-2"
      activeClassName="text-red-400 border-b-4 border-red-400"
    >
      {children}
    </NavLink>
  );
};

export const Deta = () => {
  const [dataOne, setdataOne] = useState([]);
  const [isVelo, setisVelo] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const dataBack = async () => {
      const resp = await http.get(`/presidents/${id}`);
      if (resp.data.leftOffice === "Amperinasa") {
        setdataOne(resp.data);
        setisVelo(true);
      }
      setdataOne(resp.data);
    };

    dataBack();
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt={dataOne.name}
          src={dataOne.portrait}
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {dataOne.name}
          </h1>
          <p class="mb-8 leading-relaxed">
            Izy no {dataOne.name}, filoha nitondra ny malagasy faha "
            {dataOne.republic}" nanomboka tamin'ny {dataOne.tookOffice} ary{" "}
            {!isVelo
              ? `nandao ny fitondrana tamin'ny ${dataOne.leftOffice}.`
              : "mbola amperinasa."}{" "}
            {dataOne.politicalParty} no antoko misy azy.
          </p>
        </div>
      </div>
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            class="object-cover object-center h-full w-full"
            src={dataOne.cover}
          />
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                />
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Teraka tamin'ny:
              </h2>
              <p class="leading-relaxed text-base">{dataOne.birthDeath}</p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Taona nahalany azy
              </h2>
              <p class="leading-relaxed text-base">{dataOne.elected}</p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Fehim-potoana nitondrany
              </h2>
              <p class="leading-relaxed text-base">{dataOne.timeInOffice}</p>
              <a
                class="mt-3 text-pink-500 inline-flex items-center cursor-pointer"
                href={dataOne.link}
              >
                Handalina bebe kokoa
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
