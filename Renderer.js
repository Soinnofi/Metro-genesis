class Renderer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
    }
    
    drawCity(cityData, metroLines) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.drawRiver(cityData.river);
        this.drawDistricts(cityData.districts);
        this.drawKeyPoints(cityData.keyPoints);
        this.drawMetroLines(metroLines);
    }
    
    drawRiver(riverPoints) {
        this.ctx.strokeStyle = '#4466ff';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(riverPoints[0].x, riverPoints[0].y);
        
        for (let i = 1; i < riverPoints.length; i++) {
            this.ctx.lineTo(riverPoints[i].x, riverPoints[i].y);
        }
        this.ctx.stroke();
    }
    
    drawDistricts(districts) {
        districts.forEach(district => {
            this.ctx.fillStyle = this.getDistrictColor(district.type);
            this.ctx.beginPath();
            this.ctx.arc(district.x, district.y, 30, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.fillStyle = '#000';
            this.ctx.font = '12px Arial';
            this.ctx.fillText(district.name, district.x - 20, district.y - 40);
        });
    }
    
    getDistrictColor(type) {
        const colors = {
            'center': '#ff6666',
            'residential': '#66ff66', 
            'industrial': '#6666ff'
        };
        return colors[type] || '#cccccc';
    }
    
    drawMetroLines(metroLines) {
        metroLines.forEach(line => {
            this.ctx.strokeStyle = line.color;
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            
            this.ctx.moveTo(line.stations[0].x, line.stations[0].y);
            for (let i = 1; i < line.stations.length; i++) {
                this.ctx.lineTo(line.stations[i].x, line.stations[i].y);
            }
            this.ctx.stroke();
            
            // Рисуем станции
            line.stations.forEach(station => {
                this.ctx.fillStyle = '#ffffff';
                this.ctx.strokeStyle = line.color;
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.arc(station.x, station.y, 6, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.stroke();
            });
        });
    }
}
