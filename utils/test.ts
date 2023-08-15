import https from 'https';

function measureSpeed() {
    const startTime = Date.now();

    https.get('https://fast.com/', (res) => {
        let data: Buffer[] = [];

        res.on('data', (chunk) => {
            data.push(chunk);
        });

        res.on('end', () => {
            const endTime = Date.now();
            const duration = (endTime - startTime) / 1000;

            const totalBytes = Buffer.concat(data).length;
            const speedMbps = (totalBytes * 8) / (duration * 1024 * 1024);

            // Round to two decimal places
            const roundedSpeed = Math.round(speedMbps * 100) / 100;

            // Convert to string without leading zeros
            const speedString = roundedSpeed.toString().replace(/^0+/, '').replace(/^\./, '')

            console.log(`Velocidad aproximada: ${speedString} Mbps`);
        });
    }).on('error', (err) => {
        console.error('Error:', err);
    });
}

measureSpeed();
