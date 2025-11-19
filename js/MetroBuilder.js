class MetroBuilder {
    buildMetroLines(cityData) {
        const lines = [];
        
        // Простая логика: соединяем ключевые точки
        const points = [...cityData.districts, ...cityData.keyPoints];
        
        // Первая линия - соединяем центр с важными точками
        const line1 = this.connectPoints(points.filter(p => 
            p.type === "center" || p.name.includes("вокзал") || p.name.includes("Жилой")
        ));
        
        lines.push({name: "Красная линия", color: "#ff4444", stations: line1});
        
        return lines;
    }
    
    connectPoints(points) {
        // Простой алгоритм соединения точек
        return points.map(point => ({
            name: point.name + " станция",
            x: point.x,
            y: point.y
        }));
    }
}
