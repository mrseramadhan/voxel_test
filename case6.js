let kursi = [
    ["1A", "2A", "3A", "4A", "5A", "6A", "7A", "8A", "9A", "10A"],
    ["1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B", "10B"],
    ["1C", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C"],
    ["1D", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D"],
    ["1E", "2E", "3E", "4E", "5E", "6E", "7E", "8E", "9E", "10E"],
    ["1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F"],
    ["1G", "2G", "3G", "4G", "5G", "6G", "7G", "8G", "9G", "10G"],
    ["1H", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H"],
    ["1I", "2I", "3I", "4I", "5I", "6I", "7I", "8I", "9I", "10I"],
    ["1J", "2J", "3J", "4J", "5J", "6J", "7J", "8J", "9J", "10J"]
];

function pesan_tiket(pesan)
{
    for (var i = 0; i < kursi.length;i++) {
        for(var j =0; j< kursi[i].length;j++)
        {
            if(kursi[i][j]==pesan)
            {
                kursi[i][j]=kursi[i][j]+'-Booked';
            }
        }
    }
}
pesan_tiket('5I')
console.log(kursi)