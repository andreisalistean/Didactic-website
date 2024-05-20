import FragmentIntro from "./Fragments/FragmentIntro";
import FragmentEfficiency from "./Fragments/FragmentEfficiency";
import FragmentSecurity from "./Fragments/FragmentSecurity";
import FragmentConduct from "./Fragments/FragmentConduct";
import FragmentContact from "./Fragments/FragmentContact";

interface Props {
  nr: number;
}

function FragmentViewer({ nr }: Props) {
  switch (nr) {
    case 0:
      return <FragmentIntro />;
    case 1:
      return <FragmentEfficiency />;
    case 2:
      return <FragmentSecurity />;
    case 3:
      return <FragmentConduct />;
    case 4:
      return <FragmentContact />;
    default:
      return <FragmentIntro />;
  }
}

export default FragmentViewer;
