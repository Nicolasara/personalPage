import React from 'react';
import Repo from '../types/Repo';
import { FaStar, FaEye, FaLink } from 'react-icons/fa';

interface Props {
    repo: Repo
}

const RepoCard = ({ repo }: Props) => {
    return (
        <a href={repo.repoUrl} target="_blank" rel="noreferrer"
            className="bg-blue-900 rounded-lg overflow-hidden shadow-lg m-6 transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="p-6 text-white flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-2xl font-bold mb-2">{repo.name}</h2>
                    <p className="text-gray-300">{repo.description}</p>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <FaStar className="text-yellow-400" />
                            <span className="ml-2">{repo.stars}</span>
                            <FaEye className="text-green-400 ml-4" />
                            <span className="ml-2">{repo.watchers}</span>
                        </div>
                        {repo.homepage &&
                            <a href={repo.homepage} target="_blank" rel="noreferrer" className="text-blue-400 flex items-center">
                                <FaLink />
                                <span className="ml-2">Homepage</span>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </a>
    );
};

export default RepoCard;


