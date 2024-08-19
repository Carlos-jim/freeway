import getAllFlight from '../../models/getFlight.model/getFlight.model.js'


export const getAllFlightsController = async (req, res) => {
    try {
        const flights = await getAllFlight()
        res.status(201).json({ message: "Vuelos obtenidos exitosamente" });
        res.json(flights)
    } catch (error) {
        console.error('Error al obtener los vuelos:', error);
        res.status(500).json({ error: "Error al obtener los vuelos" });
    }
}