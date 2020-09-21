import React, { Component } from "react";

import SectionTitle from "./SectionTitle";

class RoomsFilter extends Component {
    state = {
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
        rooms: this.props.filteredRooms[0],
        setFilteredRooms: this.props.filteredRooms[1],
    };

    componentDidMount() {
        this.getMinmaxPriceSize();
    }

    handleChange = ({ target: { type, name, value, checked } }) => {
        if (type === "checkbox") value = checked;

        if (type === "number" || type === "range" || (type === "select-one" && name === "capacity")) value = +value;

        this.setState({ [name]: value }, () => this.filterRooms(name));
    };

    sortBy(sortArr, sortBy) {
        const [{ price: minPrice }, { price: maxPrice }] = sortArr.filter(item => {
            const arrOfItems = sortArr.map(item => item[sortBy]);

            return item[sortBy] === Math.min(...arrOfItems) || item[sortBy] === Math.max(...arrOfItems);
        });

        return [minPrice, maxPrice];
    }

    getMinmaxPriceSize() {
        const [minPrice, maxPrice] = this.sortBy(this.state.rooms, "price");
        const [minSize, maxSize] = this.sortBy(this.state.rooms, "size");

        this.setState({ minPrice, maxPrice, minSize, maxSize, price: maxPrice });
    }

    filterRooms() {
        const { type, capacity, price, minSize, maxSize, breakfast, pets, rooms } = this.state;

        let filteredRooms = [...rooms];

        if (type !== "all") filteredRooms = filteredRooms.filter(room => room.type === type);

        if (capacity !== 1) filteredRooms = filteredRooms.filter(room => room.capacity >= capacity);

        filteredRooms = filteredRooms.filter(room => room.price <= price);

        filteredRooms = filteredRooms.filter(({ size }) => size >= minSize && size <= maxSize);

        if (breakfast) filteredRooms = filteredRooms.filter(({ breakfast }) => breakfast);

        if (pets) filteredRooms = filteredRooms.filter(({ pets }) => pets);

        this.state.setFilteredRooms(filteredRooms);
    }

    render() {
        const { rooms, type, minSize, maxSize, minPrice, maxPrice, price, capacity, breakfast, pets } = this.state;

        const filterRoomsTypes = ["all", ...new Set(rooms.map(({ type }) => type))];
        const filterRoomsCapacities = [...new Set(rooms.map(({ capacity }) => capacity))];

        return (
            <section className="filter-container">
                <SectionTitle title="search rooms" />

                <form className="filter-form">
                    <div className="form-group">
                        <label>room type</label>
                        <select name="type" className="form-control" value={type} onChange={this.handleChange}>
                            {filterRoomsTypes.map((type, idx) => (
                                <option key={idx} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>guests</label>
                        <select name="capacity" className="form-control" value={capacity} onChange={this.handleChange}>
                            {filterRoomsCapacities.map((capacity, idx) => (
                                <option key={idx} value={capacity}>
                                    {capacity}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>room price ${price}</label>
                        <input
                            type="range"
                            name="price"
                            className="form-control"
                            step={maxPrice % 10}
                            min={minPrice}
                            max={maxPrice}
                            value={price}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>room size</label>
                        <div className="size-inputs">
                            <input
                                type="number"
                                name="minSize"
                                className="size-input"
                                min={200}
                                value={minSize}
                                onChange={this.handleChange}
                            />
                            <input
                                type="number"
                                name="maxSize"
                                className="size-input"
                                max={1000}
                                value={maxSize}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="single-extra">
                            <input
                                type="checkbox"
                                name="breakfast"
                                id="breakfast"
                                checked={breakfast}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>

                        <div className="single-extra">
                            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={this.handleChange} />
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default RoomsFilter;
