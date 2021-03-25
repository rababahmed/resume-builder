{
  props.bio.map((fullName) => {
    return <div key={uniqid()}>{fullName}</div>;
  });
}
