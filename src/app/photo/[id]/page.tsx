export default function PhotoPage({params}) {
    const photo = photos.find((p) => p.id ===params.id);
    return (
        <Modal>
            <Photo photo={photo} />
        </Modal>
    )
    
};
