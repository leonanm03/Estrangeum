const objectItem = {
  id: 128,
  name: "Kriptonita",
  category: "ALIEN",
  ObjectImage: [
    {
      id: 401,
      object_id: 128,
      image_url:
        "https://cienciahoje.org.br/wp-content/uploads/2019/11/Cultura-Pop_Figura1_AdobeStock_127664503.jpg",
      createdAt: "2023-06-23T19:18:24.365Z",
      updatedAt: "2023-06-23T19:18:24.365Z",
    },
    {
      id: 408,
      object_id: 128,
      image_url:
        "https://www.meaning88.com/image0407/assets/mw/images/article/art-wap-article-main/kryptonite-3628-865e28f0d333554cc94ce3ad542f3f49@1x.jpg",
      createdAt: "2023-06-23T19:18:24.365Z",
      updatedAt: "2023-06-23T19:18:24.365Z",
    },
    {
      id: 413,
      object_id: 128,
      image_url:
        "https://meioambiente.culturamix.com/blog/wp-content/uploads/2013/01/Descoberta-De-Criptonita-Na-Terra.jpeg",
      createdAt: "2023-06-23T19:18:24.365Z",
      updatedAt: "2023-06-23T19:18:24.365Z",
    },
  ],
};

export function ObjectCard() {
  const { id, category, name, ObjectImage } = objectItem;
  const image = ObjectImage[0].image_url;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
}
