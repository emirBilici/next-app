import Link from "next/link";

export default function Movies({data, type})
{
    switch (type) {
        case "popular":
            const movies = data.results;

            return (
                <>
                    <h1 className="movies-title">Popular Movies</h1>
                    <div className="movies">
                        {movies.map(({ title, poster_path, id }) => (
                            <div className="movie">
                                <Link href={`/film/${id}`}>
                                    <a>
                                        <h3>{title}</h3>
                                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt=""/>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <style jsx>{`
                      .movies-title {
                      max-width: 1260px;
                      margin: 12px auto 0 auto;
                      padding: 12px;
                      color: #1d1d1f;
                      }
                      .movies {
                        display: grid;
                        grid-template: auto / repeat(4, 1fr);
                        grid-gap: 2em;
                        max-width: 1260px;
                        margin: 0 auto;
                        padding: 1em 12px;

                        .movie {
                          position: relative;
                          max-height: 289px;
                          border-radius: 12px;
                          overflow: hidden;

                          h3 {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            color: #fff;
                            padding: 12px;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            align-items: flex-end;
                            background: linear-gradient(to top, #000, rgba(0, 0, 0, 0.32), transparent);
                          }

                          img {
                            display: block;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                          }
                        }
                      }
                    `}</style>
                </>
            );
            break;
    }
}