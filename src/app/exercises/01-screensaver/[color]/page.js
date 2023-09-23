import ScreenSaver from "../../../../components/ScreenSaver";

function ScreenSaverExercise({ params }) {
  const { color } = params;

  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={color} />
    </main>
  );
}

export default ScreenSaverExercise;
