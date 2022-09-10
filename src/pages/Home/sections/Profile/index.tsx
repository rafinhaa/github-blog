import { Info } from "../../../../components/Info";
import { Typography } from "../../../../components/Typography";
import { ProfileContainer, ProfileContent } from "./styles";

export const Profile = () => {
  return (
    <ProfileContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/c460/226f/8a0e7a6ab75fc2eabd9a0a9ae72f8ea0?Expires=1663545600&Signature=Vr8uw7GLqpKeNgWy-swQEgjxsn20o18zuzqrYNEafBcRXImrXIRhoSnfhuX3jKEUlbQjKnttaDpV0q9kPgp-iFgQpkySfmX54gny6Fz0QSM4Vmutt7dLTkp3c3tkm2V7yqYbTOfw4AWxmnZ6k-oeQ77rKGAxbVPkbAkcbqh~mJJ1kNq5MOcnDvYKJ-B6ihnO2zt5qe6TPt-eEPBfrgdNoymARaR7xOSELvjFaScjvooTyKDBRn9VOAsbDguyW928v8DSisUyd~R9X1pO0bNDM9MpWH9zEq1AvvZqwbA796IgkqpZX7E7H9TE1-mkpOw1WSmn~qdjKyKM07OCJ6ieAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt=""
      />
      <ProfileContent>
        <header>
          <Typography.Title color="title" size="l">
            Cameron Williamson
          </Typography.Title>
          <Typography.Link href="#" type="external">
            github
          </Typography.Link>
        </header>
        <Typography.Text color="text" size="m">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Typography.Text>
        <footer>
          <Info type="username">cameronwll</Info>
          <Info type="company">Rocketseat</Info>
          <Info type="followers">32 seguidores</Info>
        </footer>
      </ProfileContent>
    </ProfileContainer>
  );
};
