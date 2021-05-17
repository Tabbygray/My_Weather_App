import "./CityList.css";
function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;
  return (
    <div>
      <h1>CityList</h1>

      <ul class="cityListUl">
        {cities.map((item, index) => {
          return <li key={index} class="cityListLi">{item}</li>;
        })}
      </ul>
    </div>
  );
}
export default CityList;
