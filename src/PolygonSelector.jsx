function PolygonSelector() {
  return (
    <div>
        <select className="dimension__select" name="sides" id="sides" placeholder="Enter number of sides">
            <option value="ES">Enter Number of sides</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
      <div>
        <input className="dimension__input" type="text" placeholder="x1" />
        <input className="dimension__input" type="text" placeholder="y1" />
      </div>

      <div>
        <input className="dimension__input" type="text" placeholder="x2" />
        <input className="dimension__input" type="text" placeholder="y2" />
      </div>

      <div>
        <input className="dimension__input" type="text" placeholder="x3" />
        <input className="dimension__input" type="text" placeholder="y3" />
      </div>
      
    </div>
  );
}

export default PolygonSelector;
