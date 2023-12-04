

const ProfileDetail = ({ porfile }) => {
    const { BiodataType, Name, ProfileImage, dateofbirth, height, occupation, fatherName, motherName, division, partnerWeight, partnerAge, phone, email } = porfile;
    return (
        <div>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Name
                </th>
                <td className="px-6 py-4">
                    {porfile.Name}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Age
                </th>
                <td className="px-6 py-4">
                    {porfile?.Age}
                </td>
            </tr>

            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Occupation
                </th>
                <td className="px-6 py-4">
                    {porfile?.occupation}
                </td>
            </tr>

            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Division
                </th>
                <td className="px-6 py-4">
                    {porfile?.Division}
                </td>
            </tr>

            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Fathers name
                </th>
                <td className="px-6 py-4">
                    {porfile?.FatherName}
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Mothers name
                </th>
                <td className="px-6 py-4">
                    {porfile?.MotherName}
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Height
                </th>
                <td className="px-6 py-4">
                    {porfile?.height}
                </td>
            </tr>
        </div>
    );
};

export default ProfileDetail;