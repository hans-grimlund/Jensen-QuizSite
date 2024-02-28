import QuizCard from "../../components/quizCard/QuizCard"

export default () => {

    return (
        <div className="col-12 d-flex flex-column align-items-center pt-4">
            <div className="d-flex justify-content-center col-12 row">
                <QuizCard category={9} description={"A broad range of topics that cover various aspects of human knowledge and understanding."} title="Genreal knowledge" />
                <QuizCard category={10} description={"Questions related to literature, authors, genres, and famous literary works."} title="Books" />
                <QuizCard category={11} description={"Questions about movies, actors, directors, film history, and cinematic techniques."} title="Film" />
                <QuizCard category={12} description={"Queries about musicians, bands, genres, musical instruments, and music history."} title="Music" />
                <QuizCard category={14} description={"Covers TV shows, series, actors, directors, and television history."} title="Television" />
                <QuizCard category={15} description={"Questions about video game titles, developers, gaming platforms, and gaming culture."} title="Video Games" />
                <QuizCard category={16} description={"Inquiries related to traditional and modern board games, game mechanics, and popular board game titles."} title="Board Games" />
                <QuizCard category={17} description={"Covers scientific concepts, discoveries, natural phenomena, biology, physics, chemistry, and environmental science."} title="Science & Nature" />
                <QuizCard category={18} description={"Questions about computer hardware, software, programming languages, operating systems, and computer history."} title="Computers" />
                <QuizCard category={20} description={"Explores myths, legends, folklore, gods, goddesses, and mythological stories from various cultures around the world."} title="Mythology" />
                <QuizCard category={21} description={"Covers a wide range of sports, athletes, teams, championships, rules, and sporting events."} title="Sports" />
                <QuizCard category={22} description={"Questions about countries, capitals, landscapes, continents, geographic features, and world geography."} title="Geography" />
                <QuizCard category={23} description={"Inquiries about historical events, periods, civilizations, significant figures, wars, and revolutions."} title="History" />
                <QuizCard category={24} description={"Covers political systems, ideologies, political figures, governments, international relations, and current affairs."} title="Politics" />
                <QuizCard category={25} description={"Questions about visual arts, artists, art movements, art history, famous artworks, and artistic techniques."} title="Art" />
                <QuizCard category={28} description={"Questions about various types of vehicles, including cars, trucks, motorcycles, airplanes, boats, and other modes of transportation."} title="Vehicles" />
            </div>
        </div>
    )
}