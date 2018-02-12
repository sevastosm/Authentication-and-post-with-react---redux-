export const sortObjectsDate = (objects: any) => {
    let sortedObjects = objects;

    // Sort posts with creation date
    sortedObjects.sort((a: any, b: any) => {
        // tslint:disable-next-line:radix
        return parseInt(b.creationDate) - parseInt(a.creationDate);

    });

    return sortedObjects;
};