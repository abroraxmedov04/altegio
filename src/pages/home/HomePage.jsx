import Services from "./Services";

const HomePage = () => {
  return (
    <div className="p-5 m-20">
      <p className="text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste deserunt,
        culpa ipsam, illum alias suscipit dignissimos ab nemo molestiae iure
        quis consequuntur cupiditate, voluptas atque mollitia animi libero magni
        sunt quae adipisci sit. Temporibus inventore officiis error voluptate ab
        dolores rem nulla sequi tenetur, impedit beatae non culpa minima
        repellat facere molestias iste veritatis officia similique laboriosam
        ipsam iusto eaque! Debitis nam enim suscipit in neque dolorum voluptas
        nostrum iure culpa beatae quis, cum soluta atque vitae facere
        necessitatibus fuga dolores molestiae harum. Beatae fuga eum, ipsa,
        repellendus et minima nulla pariatur totam, atque nobis soluta eveniet
        temporibus minus! Modi?
      </p>
      <p className="text-center text-lg pt-5 bg-green-400">
        Altegio uchrashuvga asoslangan biznesga muvaffaqiyatli xizmat qiladi
      </p>
      <div className="!grid grid-cols-5 gap-4">
        <Services img="/images/beauty-salon.webp" def="Go'zallik saloni" />
        <Services img="/images/hair-salon.webp" def="Sartaroshxona" />
        <Services img="/images/barbershop.webp" def="Go'zallik saloni" />
        <Services img="/images/nail-salon.webp" def="Go'zallik saloni" />
        <Services img="/images/wellness-studio.webp" def="Go'zallik saloni" />
        <Services img="/images/tattoo-shop.webp" def="Go'zallik saloni" />
        <Services img="/images/piercing-studio.webp" def="Go'zallik saloni" />
        <Services img="/images/massage-salon.webp" def="Go'zallik saloni" />
        <Services img="/images/wax-bar.webp" def="Go'zallik saloni" />
        <Services img="/images/and-more.webp" def="Go'zallik saloni" />
      </div>
    </div>
  );
};

export default HomePage;
