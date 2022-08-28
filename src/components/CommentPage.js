import React, { useState, useEffect } from 'react';
import { HashScroll } from 'react-hash-scroll';
import Comment from './Comment';
import Spinner from 'react-bootstrap/Spinner';
import { auth, db } from '../firebse';
import { ToastContainer, toast } from 'react-toastify';
import { setDoc, doc, getDocs, collection,  Timestamp, orderBy, } from 'firebase/firestore';

const commentCollectiion = collection(db, 'SCRAPPY_CONSULT');

export default function CommentPage() {
  const id = Math.random().toString(36).slice(2);

  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);

  console.log('comments', comments);

  const handleSubmitReport = async (e) => {
    e.preventDefault();
    if (comment === '' || name === '') {
      setError(true);
      toast.error(`All fields required`, {
        position: 'top-right',
      });
    } else {
      setLoading(true);
      try {
        await setDoc(doc(db, 'SCRAPPY_CONSULT', id), {
          name,
          comment,
          createdAt: new Date().getTime(),
        });
        const data = await getDocs(commentCollectiion).orderBy('', 'desc');
        setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setComment('');
        setName('');
        setLoading(false);
        toast.success(`Comment Submission Success.`, {
          position: 'top-right',
        });

        setTimeout(function () {
          window.location.reload();
        }, 4000);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setLoadingComments(true);
    const getComments = async () => {
      try {
        const data = await getDocs(commentCollectiion).orderBy('date', 'desc');
        setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoadingComments(false);
      } catch (err) {
        console.log('err', err.message);
        setLoadingComments(false);
      }
    };
    getComments();
  }, []);
  return (
    <HashScroll hash='#comment'>
      <div className='container my-5 d-flex flex-column'>
        <h1 className='home_header'>Comments</h1>
        <div className='home_services'>
          <div className='home_comment'>
            <form
              action=''
              onSubmit={handleSubmitReport}
              className='comment_form'
            >
              <label htmlFor='name'>Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                name='name'
                placeholder='Enter your name'
              />
              <label htmlFor='comment'>Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                name='comment'
                cols='30'
                placeholder='Enter your comment'
                rows='10'
              ></textarea>
              <p>Maximmum of 250 characters.</p>
              <button
                disabled={loading}
                className={
                  loading
                    ? 'comment_button_loading mb-2'
                    : 'comment_button mb-2'
                }
              >
                {loading ? (
                  <Spinner animation='border' variant='warning' />
                ) : (
                  'SUBMIT'
                )}
              </button>
            </form>
            <div></div>
          </div>
          <div className='contact_list comment_list'>
            {loadingComments ? (
              <div className='d-flex items-center justify-content-center'>
                <h3 style={{ color: 'rgb(216, 88, 14)' }}>
                  Loading comments ...
                </h3>
              </div>
            ) : (
              <>
                {comments.map((com) => (
                  <div key={com.id}>
                    <Comment clientComment={com} />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </HashScroll>
  );
}
