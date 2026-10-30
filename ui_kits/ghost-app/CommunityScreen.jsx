const { TopBar, PostCard, ReviewCard, Icon } = window.GhostUIDesignSystem_a29fdf;
const HERO = "../../assets/img/trek-hero.png";
const A1 = "../../assets/img/avatar-1.jpg";

function CommunityScreen() {
  const [liked, setLiked] = React.useState(false);
  return (
    <>
      <TopBar title="Community" style={{ padding: "8px 0" }} actions={<Icon name="message-circle" size={24} />} />
      <PostCard image={HERO} authorName="Sufiyan Jin" authorAvatar={A1} hashtag="#Traking"
        caption="Tracking on Chembra Peak in Kerala 2 Days 3 Nights"
        liked={liked} onLike={() => setLiked(v => !v)}
        style={{ width: "100%", padding: 0, background: "transparent" }} />
      <ReviewCard name="Sufiyan Jin" handle="@SufiyanJin" avatar={A1} rating="4.6"
        style={{ width: "100%", padding: "12px 0" }}
        body="Bahut cooperative aur supportive hain. Team ke sath kaam karne me maza aata hai. Thoda aur time management pe kaam kar sakte hain." />
    </>
  );
}
Object.assign(window, { CommunityScreen });
