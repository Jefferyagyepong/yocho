export default function Reservation() {
    return (
      <div className="content-1">
        <h3>Book a reservation now</h3>
        <form>
          <input type="text" name="name" required />
          <select>
            <option value="Fufu & Light Soup"></option>
            <option value="Fufu & Chicken Soup"></option>
            <option value="Banku & Okro Stew"></option>
            <option value="Banku & Tilapia"></option>
            <option value="Assorted Fried Rice"></option>
            <option value="Rice & Stew"></option>
          </select>
          <select>
            <option value="Fruit Juice"></option>
            <option value="Milkshake"></option>
            <option value="Coconut Water"></option>
          
          </select>
        </form>
      </div>
    );
}