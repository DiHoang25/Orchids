const ListOfOrchids = [
    {
        id: "1",
        name: "Lan Vũ Nữ",
        rating: 5,
        rareLevel: "⭐⭐⭐",
        isSpecial: true,
        isNatural: true,
        image: "https://mangphunhakinh.com/wp-content/uploads/2022/10/hoa-lan-dep-12.jpg",
        video: "https://youtu.be/3ztWglvlNFo",
        color: "Vàng",
        origin: "Nam Mỹ",
        habitat: "Rừng mưa nhiệt đới",
        description: "Lan Vũ Nữ (Oncidium) là loài lan có những bông hoa nhỏ mọc thành từng chùm lớn, tạo cảm giác như những vũ công đang nhảy múa. Hoa có nhiều màu sắc, nhưng phổ biến nhất là màu vàng rực rỡ. Lan Vũ Nữ thích nghi tốt với môi trường có độ ẩm vừa phải và ánh sáng mạnh. Khi trồng, cần tưới nước đều đặn nhưng tránh úng rễ. Đây là một trong những loài lan dễ chăm sóc và rất thích hợp để trang trí trong nhà hoặc sân vườn."
    },
    {
        id: "2",
        name: "Lan Hồ Điệp",
        rating: 5,
        rareLevel: "⭐⭐",
        isSpecial: true,
        isNatural: true,
        image: "https://dienhoa60giay.com/upload/lan-ho-diep-dep-25_-12-09-2019-10-30-26.jpg",
        video: "https://youtu.be/CKvtLqLv-ys",
        color: "Trắng",
        origin: "Đông Nam Á",
        habitat: "Khu vực có khí hậu ấm áp",
        description: "Lan Hồ Điệp (Phalaenopsis) là một trong những loài lan phổ biến nhất vì vẻ đẹp tinh tế và thời gian nở hoa kéo dài. Hoa có hình dáng cánh bướm đặc trưng và thường xuất hiện trong các dịp lễ tết. Lan Hồ Điệp ưa môi trường có độ ẩm cao, ánh sáng gián tiếp và cần tưới nước đều đặn. Khi chăm sóc đúng cách, hoa có thể giữ được vẻ đẹp trong nhiều tháng. Đây là loài lan lý tưởng cho những người mới bắt đầu trồng lan."
    },
    {
        id: "3",
        name: "Lan Cattleya",
        rating: 4,
        rareLevel: "⭐⭐⭐⭐",
        isSpecial: true,
        isNatural: true,
        image: "https://hoalan360.com/uploads/file/bai%20viet%20hoa/Lan-Cattleya-1.jpg",
        video: "https://youtu.be/Tdf6ECclsIA",
        color: "Tím",
        origin: "Trung và Nam Mỹ",
        habitat: "Núi cao và rừng nhiệt đới",
        description: "Lan Cattleya được mệnh danh là 'nữ hoàng của các loài lan' nhờ vào những bông hoa to, rực rỡ và hương thơm quyến rũ. Đây là một trong những loài lan có giá trị thẩm mỹ cao, thường được dùng trong các cuộc thi hoa lan. Lan Cattleya ưa ánh sáng mạnh nhưng cần được che bớt vào mùa hè. Khi chăm sóc đúng cách, hoa có thể kéo dài từ 2 đến 4 tuần."
    },
    {
        id: "4",
        name: "Lan Hài",
        rating: 5,
        rareLevel: "⭐⭐⭐⭐⭐",
        isSpecial: true,
        isNatural: true,
        image: "https://file.hstatic.net/200000323375/file/1_lan_hai_canh_77f62507325b463987301f040f5f93d8_grande.jpg",
        video: "https://youtu.be/VnTKhb9zGYQ",
        color: "Hồng",
        origin: "Việt Nam",
        habitat: "Vùng núi cao, mát mẻ",
        description: "Lan Hài (Paphiopedilum) có hình dáng đặc biệt với phần cánh môi giống chiếc hài cổ. Hoa có màu sắc rực rỡ như hồng, vàng, xanh lục. Loài lan này phát triển mạnh trong điều kiện nhiệt độ mát mẻ, độ ẩm cao và ánh sáng yếu. Lan Hài thường được trồng trong chậu với giá thể thoát nước tốt. Đây là loài lan quý hiếm và có giá trị cao trên thị trường."
    },
    {
        id: "5",
        name: "Lan Dendrobium",
        rating: 5,
        rareLevel: "⭐⭐⭐",
        isSpecial: true,
        isNatural: true,
        image: "https://thienduonghoa.com.vn/Uploads/958/images/LAN-DENDROBIUM%20-%20ENOBI%20(1).jpg",
        video: "https://youtu.be/7aj-BPilN24",
        color: "Vàng tím",
        origin: "Châu Á",
        habitat: "Rừng nhiệt đới",
        description: "Lan Dendrobium là một chi lan đa dạng với hơn 1.000 loài. Hoa thường mọc thành từng chùm dài với màu sắc rực rỡ như tím, vàng, trắng. Loài lan này có khả năng thích nghi tốt với nhiều môi trường khác nhau và có thể ra hoa quanh năm. Khi chăm sóc, cần đảm bảo cây được cung cấp đủ ánh sáng, tưới nước vừa phải và bón phân định kỳ để cây phát triển khỏe mạnh."
    },
    {
        id: "6",
        name: "Lan Giáng Hương",
        rating: 5,
        rareLevel: "⭐⭐⭐⭐",
        isSpecial: true,
        isNatural: true,
        image: "https://lanhodiep.vn/wp-content/uploads/2023/03/lan-giang-huong-1.jpg",
        video: "https://youtu.be/BzJdkV8xZFY",
        color: "Cam",
        origin: "Việt Nam",
        habitat: "Rừng nhiệt đới",
        description: "Lan Giáng Hương thuộc nhóm lan rễ gió, thường sống bám trên thân cây lớn trong rừng. Hoa mọc thành từng chùm dài, có hương thơm ngọt ngào và màu sắc rực rỡ như cam, hồng, trắng. Loài lan này thích hợp với khí hậu nóng ẩm và cần được tưới nước thường xuyên nhưng phải đảm bảo giá thể thông thoáng để tránh thối rễ."
    },
    {
        id: "7",
        name: "Lan Kim Điệp",
        rating: 4,
        rareLevel: "⭐⭐⭐",
        isSpecial: true,
        isNatural: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQY3SzmlRm0hcrmI4as6SPfhaLZ_SKK3eGhQ&s",
        video: "https://youtu.be/CKvtLqLv-ys",
        color: "Vàng",
        origin: "Châu Á",
        habitat: "Rừng mưa",
        description: "Lan Kim Điệp có hoa màu vàng rực rỡ, mang lại cảm giác ấm áp và tươi sáng. Hoa thường mọc thành từng chùm nhỏ và có mùi hương dịu nhẹ. Loài lan này thích hợp với môi trường có độ ẩm cao, ánh sáng vừa phải. Cần tưới nước thường xuyên nhưng tránh để rễ bị úng nước. Đây là loài lan dễ chăm sóc và có thể trồng trong chậu hoặc ghép vào gỗ lũa."
    },
    
        {
            id: "8",
            name: "Lan Báo Hỷ",
            rating: 4,
            rareLevel: "⭐⭐⭐",
            isSpecial: true,
            isNatural: true,
            image: "https://down-vn.img.susercontent.com/file/877708687e73a5d1467aae1950db6c07",
            video: "https://youtu.be/CKvtLqLv-ys",
            color: "Tím",
            origin: "Việt Nam",
            habitat: "Vùng có độ ẩm cao",
            description: "Lan Báo Hỷ (Dendrobium anosmum) được yêu thích bởi hương thơm ngọt ngào và khả năng nở hoa đẹp mắt. Hoa mọc thành từng chùm dài, màu tím hồng quyến rũ. Loài lan này thường rụng lá vào mùa đông và ra hoa vào mùa xuân. Khi trồng, cần đặt cây ở nơi có độ ẩm cao, ánh sáng vừa phải. Đây là loài lan dễ trồng, phù hợp với người mới bắt đầu."
        },
        {
            id: "9",
            name: "Lan Hoàng Thảo",
            rating: 5,
            rareLevel: "⭐⭐⭐⭐",
            isSpecial: true,
            isNatural: true,
            image: "https://vattutronglan.vn/Uploads/images/Tintuc/lan-hoang-thao-vang.jpg",
            video: "https://youtu.be/CKvtLqLv-ys",
            color: "Tím trắng",
            origin: "Châu Á",
            habitat: "Rừng nhiệt đới, nơi có độ ẩm cao",
            description: "Lan Hoàng Thảo (Dendrobium) có hoa nở rực rỡ với màu sắc đa dạng từ trắng, vàng đến tím. Đây là một trong những chi lan lớn nhất, có nhiều loài phổ biến tại Việt Nam. Hoa có mùi hương nhẹ nhàng, thích hợp với môi trường nhiệt đới ẩm. Cây phát triển tốt trong chậu hoặc ghép trên gỗ lũa. Khi chăm sóc, cần tưới nước đều đặn và bón phân định kỳ."
        },
        {
            id: "10",
            name: "Lan Ngọc Điểm",
            rating: 5,
            rareLevel: "⭐⭐⭐⭐",
            isSpecial: true,
            isNatural: true,
            image: "https://hoadepviet.com/wp-content/uploads/2018/04/ngoc-diem-dai-chau-5.jpg",
            video: "https://youtu.be/CKvtLqLv-ys",
            color: "Tím",
            origin: "Đông Nam Á",
            habitat: "Rừng nhiệt đới",
            description: "Lan Ngọc Điểm (Rhynchostylis gigantea), còn gọi là lan Đai Châu, có hoa mọc thành từng chùm dài với hương thơm ngọt ngào. Đây là loài lan có sức sống mạnh mẽ, thích nghi tốt với môi trường khô hạn. Khi trồng, cần đảm bảo cây có đủ ánh sáng nhưng không quá nắng gắt. Loài lan này rất phổ biến trong các dịp Tết vì hoa nở vào cuối năm."
        },
        {
            id: "11",
            name: "Lan Hạc Vỹ",
            rating: 4,
            rareLevel: "⭐⭐⭐",
            isSpecial: true,
            isNatural: true,
            image: "https://giongcaytrong.hdvn.vn/uploads/images/bai-viet/hoa-lan/lan-hac-vy/lam-the-nao-de-lan-hac-vy-cho-ra-hoa-quanh-nam-2.jpg",
            video: "https://youtu.be/CKvtLqLv-ys",
            color: "Trắng tím",
            origin: "Việt Nam",
            habitat: "Núi cao, khí hậu mát mẻ",
            description: "Lan Hạc Vỹ (Dendrobium aphyllum) có hoa nhỏ, cánh mỏng manh nhưng rất duyên dáng. Hoa thường nở vào mùa xuân và kéo dài khoảng 1-2 tuần. Cây thích hợp với môi trường mát mẻ, độ ẩm cao và cần nhiều ánh sáng. Khi trồng, nên ghép cây vào gỗ hoặc chậu đất nung để rễ thông thoáng, tránh bị úng nước."
        },
        {
            id: "12",
            name: "Lan Hổ Bì",
            rating: 4,
            rareLevel: "⭐⭐",
            isSpecial: true,
            isNatural: true,
            image: "https://down-vn.img.susercontent.com/file/9dba72dfdf051a79807f369fc7df0f0a",
            video: "https://youtu.be/CKvtLqLv-ys",
            color: "Vàng nâu",
            origin: "Châu Á",
            habitat: "Rừng mưa nhiệt đới",
            description: "Lan Hổ Bì (Grammatophyllum speciosum) là loài lan có kích thước lớn nhất trong họ lan, có thể cao đến 3m. Hoa có màu vàng nâu đặc trưng, nở thành từng chùm lớn. Đây là loài lan rất bền, hoa có thể kéo dài đến 2 tháng. Cây thích hợp với môi trường nóng ẩm, cần ánh sáng mạnh để phát triển tốt."
        },
        {
            id: "13",
            name: "Lan Đuôi Chồn",
            rating: 5,
            rareLevel: "⭐⭐⭐⭐",
            isSpecial: true,
            isNatural: true,
            image: "https://i.imgur.com/QuBp8Xal.jpg",
            video: "https://youtu.be/CKvtLqLv-ys",
            color: "Hồng tím",
            origin: "Việt Nam",
            habitat: "Rừng ẩm, có độ cao trung bình",
            description: "Lan Đuôi Chồn (Aerides) có chùm hoa dài, rũ xuống trông giống như đuôi chồn. Hoa có mùi thơm nhẹ nhàng, thường nở vào mùa hè. Cây thích hợp với môi trường có độ ẩm cao, cần tưới nước thường xuyên nhưng tránh đọng nước. Đây là loài lan rất được yêu thích vì vẻ đẹp mềm mại và thanh thoát."
        },
        {
            id: "14",
            name: "Lan Thủy Tiên",
            rating: 5,
            rareLevel: "⭐⭐⭐",
            isSpecial: true,
            isNatural: true,
            image: "https://cdn.eva.vn/upload/3-2021/images/2021-07-02/image8-1625190650-80-width600height400.jpg",
            video: "https://youtu.be/CKvtLqLv-ys",
            color: "Vàng cam",
            origin: "Châu Á",
            habitat: "Rừng nhiệt đới",
            description: "Lan Thủy Tiên (Dendrobium chrysotoxum) có hoa màu vàng tươi rực rỡ, mọc thành từng chùm dài. Hoa có hương thơm nhẹ, nở vào mùa xuân. Loài lan này thích hợp với khí hậu nóng ẩm, cần nhiều ánh sáng để phát triển. Khi chăm sóc, nên tưới nước đều đặn nhưng tránh để cây bị ngập úng."
        },
        {
            id: "15",
            name: "Lan Hồng Ngọc",
            rating: 5,
            rareLevel: "⭐⭐⭐⭐⭐",
            isSpecial: true,
            isNatural: true,
            image: "https://hoalanhuyanh.com/userfiles/image/gio-lan/gia-hac/hong-ngoc/gia-hac-hong-ngoc-2.jpg",
            video: "https://youtu.be/CKvtLqLv-ys",
            color: "Hồng",
            origin: "Đông Nam Á",
            habitat: "Rừng nhiệt đới ẩm",
            description: "Lan Hồng Ngọc (Dendrobium anosmum var. huttonii) là loài lan có màu hồng tím bắt mắt và mùi hương dịu nhẹ. Hoa thường nở rộ vào mùa xuân, tạo nên vẻ đẹp rực rỡ. Loài lan này thích hợp với môi trường nhiệt đới ẩm, cần nhiều ánh sáng và độ ẩm cao. Khi chăm sóc, cần bón phân định kỳ để cây phát triển khỏe mạnh."
        },
        {
            id: "16",
            name: "Lan Thanh Đạm",
            rating: 4,
            rareLevel: "⭐⭐⭐",
            isSpecial: true,
            isNatural: true,
            image: "https://thanhorchid.com/wp-content/uploads/2019/10/IMG_0449.jpg",
            video: "https://youtu.be/CKvtLqLv-ys",
            color: "Xanh nhạt",
            origin: "Việt Nam",
            habitat: "Núi cao, khí hậu mát mẻ",
            description: "Lan Thanh Đạm (Coelogyne) có hoa màu xanh nhạt độc đáo, thường mọc thành từng chùm nhỏ. Đây là loài lan thích hợp với khí hậu mát mẻ, cần tưới nước thường xuyên nhưng phải đảm bảo thông thoáng cho rễ. Hoa có hương thơm dịu nhẹ, rất được ưa chuộng trong trang trí nội thất."
        }
    ];
    
    export default ListOfOrchids;
    

