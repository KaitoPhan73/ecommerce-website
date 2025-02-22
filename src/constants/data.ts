import { FaDisease } from "react-icons/fa";
import { MdOutlineScubaDiving } from "react-icons/md";
import { FcManager } from "react-icons/fc";
export const services = [
  {
    title: "Lặn biển",
    icon: MdOutlineScubaDiving,
    description:
      "Trải nghiệm lặn biển cùng các chuyên gia và thế giới biển xanh bát ngát đầy màu sắc thú vị.",
    image: "https://kinhboi.com/wp-content/uploads/2022/02/lan-bien-1.jpg",
  },
  {
    title: "Du lịch sinh thái",
    icon: FaDisease,
    description:
      "Khám phá các khu bảo tồn biển và trải nghiệm những điều thú vị sẽ đến với bạn tại vùng đất này.",
    image:
      "https://bcp.cdnchinhphu.vn/334894974524682240/2022/4/2/con-dao-1648858077344216792948.jpg",
  },
  {
    title: "Hướng dẫn viên",
    icon: FcManager,
    description:
      "Được hướng dẫn bởi các chuyên gia giàu nhiệt huyết, tận tình và giàu kinh nghiệm .",
    image:
      "https://m.baotuyenquang.com.vn/media/images/2022/03/img_20220331093237.jpg",
  },
];

export const homepageList  = [
  {
    title: "Bộ Sưu Tập Đặc Sắc",
    icon: MdOutlineScubaDiving,
    description:
      "Khám phá những bộ sưu tập thẻ bài đa dạng từ thể thao, anime đến nhân vật huyền thoại.",
    image:
      "/card/naruto.jpg",
    link: "/products",
  },
  {
    title: "Thiết Kế Thẻ Cá Nhân",
    icon: FaDisease,
    description:
      "Tự tạo phong cách riêng với các mẫu thẻ bài độc đáo, từ ý tưởng đến sản phẩm hoàn chỉnh.",
    image:
      "/card/dragon.jpg",
    link: "/blog",
  },
  {
    title: "Dịch Vụ & Hỗ Trợ",
    icon: FcManager,
    description:
      "Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn trong việc tìm kiếm, mua bán và bảo quản thẻ bài.",
    image:
      "/card/benzema.jpg",
    link: "/about",
  },
];


export const products = [
  {
    id: "1",
    name: "Túi Xanh",
    price: 160000,
    description: "Túi màu xanh với thiết kế đơn giản, thích hợp cho nhiều dịp.",
    color: "Xanh",
    size: "M",
    image: "/images/blue-sky.jpg",
  },
  {
    id: "2",
    name: "Túi Đỏ",
    price: 200000,
    description: "Túi màu đỏ nổi bật, phù hợp cho những sự kiện đặc biệt.",
    color: "Đỏ",
    size: "L",
    image: "/images/blue-sky.jpg",
  },
  {
    id: "3",
    name: "Túi Vàng",
    price: 180000,
    description: "Túi màu vàng sáng, thời trang và cá tính.",
    color: "Vàng",
    size: "S",
    image: "/images/blue-sky.jpg",
  },
  {
    id: "4",
    name: "Túi Vàng 2",
    price: 180000,
    description: "Túi màu vàng sáng, thời trang và cá tính.",
    color: "Vàng",
    size: "S",
    image: "/images/blue-sky.jpg",
  },
  {
    id: "5",
    name: "Túi Xanh",
    price: 160000,
    description: "Túi màu xanh với thiết kế đơn giản, thích hợp cho nhiều dịp.",
    color: "Xanh",
    size: "M",
    image: "/images/blue-sky.jpg",
  },
  {
    id: "6",
    name: "Túi Đỏ",
    price: 200000,
    description: "Túi màu đỏ nổi bật, phù hợp cho những sự kiện đặc biệt.",
    color: "Đỏ",
    size: "L",
    image: "/images/blue-sky.jpg",
  },
  {
    id: "7",
    name: "Túi Vàng",
    price: 180000,
    description: "Túi màu vàng sáng, thời trang và cá tính.",
    color: "Vàng",
    size: "S",
    image: "/images/blue-sky.jpg",
  },
  {
    id: "8",
    name: "Túi Vàng 2",
    price: 180000,
    description: "Túi màu vàng sáng, thời trang và cá tính.",
    color: "Vàng",
    size: "S",
    image: "/images/blue-sky.jpg",
  },
];

export const dataBlogs = [
  {
    id: 1,
    name: "Tại sao nên sưu tập thẻ bài Pokemon?",
    description:
      "Trong thời đại số hóa, việc sưu tập thẻ bài Pokemon vẫn là một xu hướng được yêu thích trên toàn thế giới. Không chỉ là một sở thích, việc sưu tập thẻ Pokemon còn mang lại nhiều giá trị đầu tư và niềm vui. Hãy cùng khám phá tại sao bạn nên bắt đầu sưu tập thẻ Pokemon ngay từ hôm nay!",
    author: "An-Thien",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    createdDate: "2024-01-15",
    posts: [
      {
        id: 101,
        title: "Giá trị đầu tư lâu dài",
        content: "Thẻ Pokemon không chỉ là món đồ sưu tập mà còn là kênh đầu tư tiềm năng. Nhiều thẻ hiếm có giá trị tăng theo thời gian, đặc biệt là các thẻ first edition hoặc thẻ giới hạn. Việc đầu tư vào thẻ Pokemon đòi hỏi kiến thức về thị trường và khả năng nhận biết thẻ chất lượng cao.",
        tags: ["pokemon", "đầu tư", "sưu tập"],
        datePublished: "2024-08-10",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      },
      {
        id: 102,
        title: "Cộng đồng sôi động",
        content: "Sưu tập thẻ Pokemon giúp bạn tham gia vào một cộng đồng năng động của những người có cùng sở thích. Bạn có thể tham gia các hội nhóm, sự kiện trao đổi thẻ, và giải đấu Pokemon TCG, mở rộng mối quan hệ và học hỏi từ những người chơi khác.",
        tags: [],
        datePublished: "",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
      }
    ]
  },
  {
    id: 2,
    name: "Hướng dẫn mở thẻ bài mù (Blind Pack) an toàn và hiệu quả",
    description: "Mở thẻ bài mù là một trải nghiệm thú vị nhưng cũng cần kỹ năng để tránh làm hỏng thẻ quý giá bên trong. Bài viết này sẽ hướng dẫn bạn cách mở thẻ mù một cách chuyên nghiệp.",
    author: "Bob Sun",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    createdDate: "2024-02-20",
    posts: [
      {
        id: 201,
        title: "Chuẩn bị dụng cụ",
        content: "Để mở thẻ mù an toàn, bạn cần chuẩn bị: găng tay không bụi, kéo sắc nhọn hoặc dao rọc chuyên dụng, và bề mặt sạch sẽ để làm việc. Việc sử dụng găng tay giúp tránh dấu vân tay trên thẻ, đặc biệt quan trọng với thẻ có giá trị cao.",
        tags: [],
        datePublished: "2024-07-22",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      }
    ]
  },
  {
    id: 3,
    name: "Thẻ cầu thủ bóng đá - Hướng dẫn sưu tập cho người mới",
    description: "Sưu tập thẻ cầu thủ bóng đá là một sở thích phổ biến trên toàn thế giới. Từ thẻ Panini World Cup đến các bộ thẻ giải đấu, mỗi tấm thẻ đều mang một giá trị và câu chuyện riêng.",
    author: "Clara Rivers",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop",
    createdDate: "2024-03-15",
    posts: [
      {
        id: 301,
        title: "Lựa chọn bộ sưu tập",
        content: "Có nhiều loại thẻ cầu thủ để sưu tập: thẻ World Cup, Champions League, các giải đấu quốc gia. Người mới nên bắt đầu với một bộ sưu tập cụ thể và dần mở rộng theo sở thích. Thẻ Panini là thương hiệu phổ biến và đáng tin cậy để bắt đầu.",
        tags: [],
        datePublished: "2024-09-05",
        image: "https://images.unsplash.com/photo-1510051640316-cee39563ddab?w=800&auto=format&fit=crop",
      }
    ]
  },
  {
    id: 4,
    name: "Bảo quản thẻ bài đúng cách - Giữ gìn giá trị lâu dài",
    description: "Bảo quản thẻ bài đúng cách là yếu tố quan trọng để duy trì giá trị của bộ sưu tập. Từ sleeve bảo vệ đến điều kiện môi trường, mọi chi tiết đều quan trọng.",
    author: "David Bloom",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop",
    createdDate: "2024-04-10",
    posts: [
      {
        id: 401,
        title: "Dụng cụ bảo quản cần thiết",
        content: "Để bảo quản thẻ tốt nhất, bạn cần: Penny sleeve để bảo vệ bề mặt thẻ, top loader cứng để chống va đập, và album chuyên dụng có độ pH trung tính. Với thẻ có giá trị cao, nên cân nhắc sử dụng dịch vụ grading để xác định độ hiếm và bảo vệ thẻ.",
        tags: ["bảo quản", "sưu tập", "đầu tư"],
        datePublished: "2024-06-30",
        image: "https://images.unsplash.com/photo-1529480816714-c8cb4ac54184?w=800&auto=format&fit=crop",
      }
    ]
  }
];